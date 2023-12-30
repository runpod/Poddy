import type { GatewayMessageCreateDispatchData, WithIntrinsicProps } from "@discordjs/core";
import { GatewayDispatchEvents } from "@discordjs/core";
import EventHandler from "../../../lib/classes/EventHandler.js";
import type ExtendedClient from "../../../lib/extensions/ExtendedClient.js";

export default class MessageCreate extends EventHandler {
	public constructor(client: ExtendedClient) {
		super(client, GatewayDispatchEvents.MessageCreate);
	}

	/**
	 * Handle the creation of a new interaction.
	 *
	 * https://discord.com/developers/docs/topics/gateway-events#interaction-create
	 */
	public override async run({ shardId, data: message }: WithIntrinsicProps<GatewayMessageCreateDispatchData>) {
		if (message.author.bot) return;

		this.client.dataDog.increment("total_messages_sent", 1, [
			`guildId:${message.guild_id ?? "@me"}`,
			`userId:${message.author.id}`,
			`channelId:${message.channel_id}`,
		]);

		if (message.guild_id) {
			if (message.member && new Date(message.member.joined_at).getTime() > Date.now() + 604_800_000) {
				const newCommunicator = await this.client.prisma.newCommunicator.findUnique({
					where: {
						userId_guildId: {
							userId: message.author.id,
							guildId: message.guild_id,
						},
					},
				});

				if (!newCommunicator) {
					await this.client.prisma.newCommunicator.create({
						data: {
							userId: message.author.id,
							guildId: message.guild_id,
							joinedAt: new Date(message.member.joined_at),
						},
					});

					this.client.dataDog.increment("new_communicators", 1, [`guildId:${message.guild_id}`]);

					if (new Date(message.member.joined_at).getTime() + 86_400 > Date.now())
						this.client.dataDog.increment("new_communicators_first_day", 1, [`guildId:${message.guild_id}`]);
				}
			}

			const autoThreadChannel = await this.client.prisma.autoThreadChannel.findUnique({
				where: { channelId: message.channel_id },
			});

			if (autoThreadChannel) {
				const name = autoThreadChannel.threadName
					? autoThreadChannel.threadName
							.replaceAll(
								"{{author}}",
								`${message.author.username}${
									message.author.discriminator === "0" ? "" : `#${message.author.discriminator}`
								}`,
							)
							.replaceAll("{{content}}", message.content)
					: message.content;

				await this.client.api.channels.createThread(
					message.channel_id,
					{
						name: name.length > 100 ? `${name.slice(0, 97)}...` : name,
					},
					message.id,
				);
			}
		}

		return this.client.textCommandHandler.handleTextCommand({ data: message, shardId });
	}
}
