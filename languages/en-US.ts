export default {
	LANGUAGE_ENABLED: true,
	LANGUAGE_ID: "en-US",
	LANGUAGE_NAME: "English, US",

	PARSE_REGEX:
		// eslint-disable-next-line unicorn/no-unsafe-regex, prefer-named-capture-group
		/^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/,
	MS_OTHER: "ms",
	SECOND_ONE: "second",
	SECOND_OTHER: "seconds",
	SECOND_SHORT: "s",
	MINUTE_ONE: "minute",
	MINUTE_OTHER: "minutes",
	MINUTE_SHORT: "m",
	HOUR_ONE: "hour",
	HOUR_OTHER: "hours",
	HOUR_SHORT: "h",
	DAY_ONE: "day",
	DAY_OTHER: "days",
	DAY_SHORT: "d",
	YEAR_ONE: "year",
	YEAR_OTHER: "years",
	YEAR_SHORT: "y",

	CreateInstantInvite: "Create Invite",
	KickMembers: "Kick Members",
	BanMembers: "Ban Members",
	Administrator: "Administrator",
	ManageChannels: "Manage Channels",
	ManageGuild: "Manage Server",
	AddReactions: "Add Reactions",
	ViewAuditLog: "View Audit Log",
	PrioritySpeaker: "Priority Speaker",
	Stream: "Video",
	ViewChannel: "View Channels",
	SendMessages: "Send Messages and Create Posts",
	SendTTSMessages: "Send Text-To-Speech Messages",
	ManageMessages: "Manage Messages",
	EmbedLinks: "Embed Links",
	AttachFiles: "Attach Files",
	ReadMessageHistory: "Read Message History",
	MentionEveryone: "Mention @everyone, @here, and All Roles",
	UseExternalEmojis: "Use External Emojis",
	ViewGuildInsights: "View Server Insights",
	Connect: "Connect",
	Speak: "Speak",
	MuteMembers: "Mute Members",
	DeafenMembers: "Deafen Members",
	MoveMembers: "Move Members",
	UseVAD: "Use Voice Activity",
	ChangeNickname: "Change Nickname",
	ManageNicknames: "Manage Nicknames",
	ManageRoles: "Manage Roles",
	ManageWebhooks: "Manage Webhooks",
	ManageGuildExpressions: "Manage Expressions",
	ManageEmojisAndStickers: "Manage Emojis and Stickers",
	UseApplicationCommands: "Use Application Commands",
	RequestToSpeak: "Request to Speak",
	ManageEvents: "Manage Events",
	ManageThreads: "Manage Threads and Posts",
	CreatePublicThreads: "Create Public Threads",
	CreatePrivateThreads: "Create Private Threads",
	UseExternalStickers: "Use External Stickers",
	SendMessagesInThreads: "Send Messages in Threads abd Posts",
	UseEmbeddedActivities: "Use Activities",
	ModerateMembers: "Timeout Members",
	ViewCreatorMonetizationAnalytics: "View Creator Monetization Analytics",
	UseSoundboard: "Use Soundboard",
	UseExternalSounds: "Use External Sounds",
	SendVoiceMessages: "Send Voice Messages",

	INVALID_ARGUMENT_TITLE: "Invalid Argument",

	INVALID_PATH_TITLE: "Invalid Command",
	INVALID_PATH_DESCRIPTION: "I have absolutely no idea how you reached this response.",

	INTERNAL_ERROR_TITLE: "Internal Error Encountered",
	INTERNAL_ERROR_DESCRIPTION:
		"An internal error has occurred, please try again later. This has already been reported to my developers.",
	SENTRY_EVENT_ID_FOOTER: "Sentry Event ID: {{eventId}}",

	NON_EXISTENT_APPLICATION_COMMAND_TITLE: "This {{type}} Does Not Exist",
	NON_EXISTENT_APPLICATION_COMMAND_DESCRIPTION:
		"You've somehow used a {{type}} that doesn't exist. I've removed the command so this won't happen in the future, this has already been reported to my developers.",

	MISSING_PERMISSIONS_BASE_TITLE: "Missing Permissions",
	MISSING_PERMISSIONS_OWNER_ONLY_DESCRIPTION: "This {{type}} can only be used by the owner of this server!",
	MISSING_PERMISSIONS_DEVELOPER_ONLY_DESCRIPTION: "This {{type}} can only be used by my developers!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_ONE_DESCRIPTION:
		"You are missing the {{missingPermissions}} permission, which is required to use this {{type}}!",
	MISSING_PERMISSIONS_USER_PERMISSIONS_OTHER_DESCRIPTION:
		"You are missing the {{missingPermissions}} permissions, which are required to use this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_ONE_DESCRIPTION:
		"I are missing the {{missingPermissions}} permission, which I need to run this {{type}}!",
	MISSING_PERMISSIONS_CLIENT_PERMISSIONS_OTHER_DESCRIPTION:
		"I are missing the {{missingPermissions}} permissions, which I need to run this {{type}}!",

	TYPE_ON_COOLDOWN_TITLE: "{{type}} On Cooldown",
	TYPE_ON_COOLDOWN_DESCRIPTION: "This {{type}} is on cooldown for another {{formattedTime}}!",
	COOLDOWN_ON_TYPE_TITLE: "Cooldown On All {{type}}",
	COOLDOWN_ON_TYPE_DESCRIPTION: "Please wait a second before running another {{type}}!",

	AN_ERROR_HAS_OCCURRED_TITLE: "An Error Has Occurred",
	AN_ERROR_HAS_OCCURRED_DESCRIPTION:
		"An error has occurred, please try again later. This has already been reported to my developers.",

	PING_COMMAND_NAME: "ping",
	PING_COMMAND_DESCRIPTION: "Pong! Get the current ping / latency of the Poddy.",

	PING: "Ping?",
	PONG: "Pong! (Host latency of {{hostLatency}}ms)",

	CONFIG_COMMAND_NAME: "config",
	CONFIG_COMMAND_DESCRIPTION: "Manage Poddy's config for your server.",

	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_NAME: "auto_thread_channel",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_DESCRIPTION: "Manage auto thread channels for your server.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_NAME: "add",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION: "Add an auto thread channel.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION: "The channel to add.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_THREAD_NAME_OPTION_NAME: "thread_name",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_THREAD_NAME_OPTION_DESCRIPTION:
		"The name of the thread to create. Supports variables {{author}} and {{content}}.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_NAME: "remove",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION: "Remove an auto thread channel.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION: "The channel to remove.",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_NAME: "list",
	CONFIG_AUTO_THREAD_CHANNEL_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION: "List all auto thread channels.",

	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_NAME: "auto_tag_on_forum_channel",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_DESCRIPTION: "Manage auto tag on forum channels for your server.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_DESCRIPTION: "Add an auto tag on a forum channel.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The forum channel to add an auto tag on.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_TAG_OPTION_NAME: "tag",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_ADD_SUB_COMMAND_TAG_OPTION_DESCRIPTION:
		"The tag to add to the forum channel.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_DESCRIPTION:
		"Remove an auto tag on forum channel.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The forum channel to remove an auto tag from.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_REMOVE_SUB_COMMAND_TAG_OPTION_DESCRIPTION:
		"The tag to remove from the forum channel.",
	CONFIG_AUTO_TAG_ON_FORUM_CHANNEL_SUB_COMMAND_GROUP_LIST_SUB_COMMAND_DESCRIPTION:
		"List all auto tag on forum channels.",

	AUTO_THREADS_LIST_TITLE: "Auto Thread Channels",
	AUTO_THREADS_TITLE_NONE_DESCRIPTION:
		"There are currently no auto thread channels for this server, add some by doing `/config auto_thread_channel add <channel>`!",

	AUTO_THREAD_ADDED_TITLE: "Auto Thread Channel Added",
	AUTO_THREAD_ADDED_DESCRIPTION: "The channel <#{{channelId}}> has been added as an auto thread channel!",

	AUTO_THREAD_REMOVED_TITLE: "Auto Thread Channel Removed",
	AUTO_THREAD_REMOVED_DESCRIPTION: "The channel <#{{channelId}}> has been removed as an auto thread channel!",

	AUTO_TAGS_LIST_TITLE: "Auto Tags On Forum Channels",
	AUTO_TAGS_TITLE_NONE_DESCRIPTION:
		"There are currently no auto tags on forum channels for this server, add some by doing `/config auto_tag_on_forum_channel add <channel> <tag>`!",

	AUTO_TAG_ADDED_TITLE: "Auto Tag On Forum Channel Added",
	AUTO_TAG_ADDED_DESCRIPTION:
		"The tag {{tag}} has been added to the forum channel <#{{channelId}}> as an auto tag on forum channel!",

	AUTO_TAG_REMOVED_TITLE: "Auto Tag On Forum Channel Removed",
	AUTO_TAG_REMOVED_DESCRIPTION:
		"The tag {{tag}} has been removed from the forum channel <#{{channelId}}> as an auto tag on forum channel!",

	EMBED_COMMAND_NAME: "embed",
	EMBED_COMMAND_DESCRIPTION: "Manage Poddy's embeds for your server.",

	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME: "create",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION: "Create an embed.",
	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_NAME: "name",
	EMBED_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the embed you want to create.",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DATA_OPTION_NAME: "data",
	EMBED_COMMAND_CREATE_SUB_COMMAND_DATA_OPTION_DESCRIPTION:
		"The data of the embed, usually exported from discohook.org -> JSON Data Editor.",

	EMBED_COMMAND_DELETE_SUB_COMMAND_NAME: "delete",
	EMBED_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION: "Delete an embed.",
	EMBED_COMMAND_DELETE_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the embed you want to delete.",

	EMBED_COMMAND_RENAME_SUB_COMMAND_NAME: "rename",
	EMBED_COMMAND_RENAME_SUB_COMMAND_DESCRIPTION: "Rename an embed.",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the embed you want to rename.",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_NAME: "new_name",
	EMBED_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_DESCRIPTION: "The new name of the embed.",

	EMBED_COMMAND_LIST_SUB_COMMAND_DESCRIPTION: "List all embeds.",

	EMBED_COMMAND_PREVIEW_SUB_COMMAND_NAME: "preview",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_DESCRIPTION: "Preview an embed.",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the embed you want to preview.",
	EMBED_COMMAND_PREVIEW_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION: "The channel to send the preview in.",

	INVALID_JSON_TITLE: "Invalid JSON",
	INVALID_JSON_DESCRIPTION: "The JSON you provided is invalid.",

	EMBED_CREATED_TITLE: "Embed Created",
	EMBED_CREATED_DESCRIPTION: "Embed **{{embedName}}** `[{{embedId}}]` has been created!",

	PREVIEW_EMBED_BUTTON_LABEL: "Preview Embed",

	EMBED_NOT_FOUND_TITLE: "Embed Not Found",
	EMBED_NOT_FOUND_DESCRIPTION: "An embed with an ID `{{embedId}}` was not found!",

	EMBED_DELETED_TITLE: "Embed Deleted",
	EMBED_DELETED_DESCRIPTION: "Embed **{{embedName}}** `[{{embedId}}]` has been deleted!",

	EMBEDS_LIST_TITLE: "Embeds",
	EMBEDS_LIST_NO_EMBEDS_DESCRIPTION:
		"There are currently no embeds for this server, add some by doing `/embed create`!",

	MISSING_PERMISSIONS_PREVIEW_MESSAGE_TITLE: "Missing Permissions",
	MISSING_PERMISSIONS_PREVIEW_MESSAGE_DESCRIPTION:
		"I'm unable to send a preview of the `{{name}}` embed into {{channel}}!",

	EMBED_PREVIEW_SENT_TITLE: "Embed Preview Sent",
	EMBED_PREVIEW_SENT_DESCRIPTION: "The embed preview has been sent to {{channel}}!",

	JUMP_TO_MESSAGE_BUTTON_LABEL: "Jump To Message",

	EMBED_RENAMED_TITLE: "Embed Renamed",
	EMBED_RENAMED_DESCRIPTION: "Embed **{{oldEmbedName}}** `[{{embedId}}]` has been renamed to **{{newEmbedName}}**!",

	HELP_DESK_COMMAND_NAME: "help_desk",
	HELP_DESK_COMMAND_DESCRIPTION: "Manage Poddy's help desk for your server.",

	HELP_DESK_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION: "Create a help desk.",
	HELP_DESK_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the help desk you want to create.",

	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_NAME: "embed_color",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_DESCRIPTION: "Manage the embed color for a help desk.",

	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_SET_SUB_COMMAND_NAME: "set",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_SET_SUB_COMMAND_DESCRIPTION: "Set the embed color for a help desk.",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_SET_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the embed color for.",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_SET_SUB_COMMAND_EMBED_COLOR_OPTION_DESCRIPTION:
		"The embed color of the help desk you want to set the embed color for.",

	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_NAME: "reset",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_DESCRIPTION:
		"Reset the embed color for a help desk.",
	HELP_DESK_COMMAND_EMBED_COLOR_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the help desk you want to reset the embed color for.",

	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_DESCRIPTION: "Manage the channel for a help desk.",

	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_SET_SUB_COMMAND_DESCRIPTION: "Set the channel for a help desk.",
	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_SET_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the channel for.",
	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_SET_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel of the help desk you want to set the channel for.",

	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_DESCRIPTION: "Reset the channel for a help desk.",
	HELP_DESK_COMMAND_CHANNEL_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the help desk you want to reset the channel for.",

	HELP_DESK_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION: "Delete a help desk.",
	HELP_DESK_COMMAND_DELETE_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the help desk you want to delete.",

	HELP_DESK_COMMAND_RENAME_SUB_COMMAND_DESCRIPTION: "Rename a help desk.",
	HELP_DESK_COMMAND_RENAME_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the help desk you want to rename.",
	HELP_DESK_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_DESCRIPTION: "The new name of the help desk.",

	HELP_DESK_OPTIONS_COMMAND_NAME: "help_desk_options",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION: "Manage options for a help desk.",

	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_DESCRIPTION: "Add an option to a help desk.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to add an option to.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the option you want to add to the help desk.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_RESPONSE_OPTION_NAME: "response",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_RESPONSE_OPTION_DESCRIPTION:
		"The response for the help desk you want to add.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_DESCRIPTION_OPTION_NAME: "description",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION:
		"The description for the help desk you want to add.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_EMOJI_OPTION_NAME: "emoji",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION: "The emoji for the help desk you want to add.",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_POSITION_OPTION_NAME: "position",
	HELP_DESK_OPTIONS_COMMAND_ADD_SUB_COMMAND_POSITION_OPTION_DESCRIPTION:
		"The position you want the added option to be at.",

	HELP_DESK_OPTIONS_COMMAND_RESPONSE_SUB_COMMAND_DESCRIPTION: "Set the response for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_RESPONSE_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the response for.",
	HELP_DESK_OPTIONS_COMMAND_RESPONSE_SUB_COMMAND_OPTION_OPTION_NAME: "option",
	HELP_DESK_OPTIONS_COMMAND_RESPONSE_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to set the response for.",
	HELP_DESK_OPTIONS_COMMAND_RESPONSE_SUB_COMMAND_RESPONSE_OPTION_DESCRIPTION:
		"The response you want to set for the option.",

	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_DESCRIPTION: "Manage the description for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_SET_SUB_COMMAND_DESCRIPTION:
		"Set the description for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_SET_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the description for.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_SET_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to set the description for.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_SET_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION:
		"The description you want to set for the option.",

	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_DESCRIPTION:
		"Reset the description for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to reset the description for.",
	HELP_DESK_OPTIONS_COMMAND_DESCRIPTION_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to reset the description for.",

	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_DESCRIPTION: "Manage the emoji for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_SET_SUB_COMMAND_DESCRIPTION:
		"Set the emoji for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_SET_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the emoji for.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_SET_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to set the emoji for.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_SET_SUB_COMMAND_EMOJI_OPTION_DESCRIPTION:
		"The emoji you want to set for the option.",

	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_DESCRIPTION:
		"Reset the emoji for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to reset the emoji for.",
	HELP_DESK_OPTIONS_COMMAND_EMOJI_SUB_COMMAND_GROUP_RESET_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to reset the emoji for.",

	HELP_DESK_OPTIONS_COMMAND_POSITION_SUB_COMMAND_DESCRIPTION: "Manage the position for a help desk option.",
	HELP_DESK_OPTIONS_COMMAND_POSITION_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to set the position for.",
	HELP_DESK_OPTIONS_COMMAND_POSITION_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to set the position for.",
	HELP_DESK_OPTIONS_COMMAND_POSITION_SUB_COMMAND_POSITION_OPTION_DESCRIPTION:
		"The position you want to set for the option.",

	HELP_DESK_OPTIONS_COMMAND_REMOVE_SUB_COMMAND_DESCRIPTION: "Remove an option from a help desk.",
	HELP_DESK_OPTIONS_COMMAND_REMOVE_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to remove an option from.",
	HELP_DESK_OPTIONS_COMMAND_REMOVE_SUB_COMMAND_OPTION_OPTION_DESCRIPTION:
		"The option you want to remove from the help desk.",

	HELP_DESK_OPTIONS_COMMAND_RENAME_SUB_COMMAND_DESCRIPTION: "Rename an option for a help desk.",
	HELP_DESK_OPTIONS_COMMAND_RENAME_SUB_COMMAND_HELP_DESK_OPTION_DESCRIPTION:
		"The name of the help desk you want to rename an option for.",
	HELP_DESK_OPTIONS_COMMAND_RENAME_SUB_COMMAND_OPTION_OPTION_DESCRIPTION: "The option you want to rename.",
	HELP_DESK_OPTIONS_COMMAND_RENAME_SUB_COMMAND_NEW_NAME_OPTION_DESCRIPTION: "The new name of the option.",

	HELP_DESK_CREATED_TITLE: "Help Desk Created",
	HELP_DESK_CREATED_DESCRIPTION: "Help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been created!",

	HELP_DESK_NOT_FOUND_TITLE: "Help Desk Not Found",
	HELP_DESK_NOT_FOUND_DESCRIPTION: "A help desk with an ID `{{helpDeskId}}` was not found!",

	INVALID_EMBED_COLOR_TITLE: "Invalid Embed Color",
	INVALID_EMBED_COLOR_DESCRIPTION: "The embed color you provided is invalid, please make sure it's a valid hex color.",

	HELP_DESK_EMBED_COLOR_SET_TITLE: "Help Desk Embed Color Set",
	HELP_DESK_EMBED_COLOR_SET_DESCRIPTION:
		"The embed color for the help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to `#{{embedColor}}`!",

	HELP_DESK_EMBED_COLOR_RESET_TITLE: "Help Desk Embed Color Reset",
	HELP_DESK_EMBED_COLOR_RESET_DESCRIPTION:
		"The embed color for the help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been reset!",

	HELP_DESK_CHANNEL_SET_TITLE: "Help Desk Channel Set",
	HELP_DESK_CHANNEL_SET_DESCRIPTION:
		"The channel for the help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to {{channel}}!",

	HELP_DESK_CHANNEL_RESET_TITLE: "Help Desk Channel Reset",
	HELP_DESK_CHANNEL_RESET_DESCRIPTION:
		"The channel for the help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been reset!",

	HELP_DESK_DELETED_TITLE: "Help Desk Deleted",
	HELP_DESK_DELETED_DESCRIPTION: "Help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been deleted!",

	HELP_DESK_RENAMED_TITLE: "Help Desk Renamed",
	HELP_DESK_RENAMED_DESCRIPTION:
		"Help desk **{{oldHelpDeskName}}** `[{{helpDeskId}}]` has been renamed to **{{newHelpDeskName}}**!",

	MAXIMUM_HELP_DESK_OPTIONS_REACHED_TITLE: "Maximum Help Desk Options Reached",
	MAXIMUM_HELP_DESK_OPTIONS_REACHED_DESCRIPTION:
		"The maximum amount of options for a help desk is 25, you've reached this limit!",

	HELP_DESK_RESPONSE_NOT_FOUND_TITLE: "Help Desk Response Not Found",
	HELP_DESK_RESPONSE_NOT_FOUND_DESCRIPTION: "A help desk response with an ID `{{helpDeskResponseId}}` was not found!",

	HELP_DESK_OPTION_ADDED_TITLE: "Help Desk Option Added",
	HELP_DESK_OPTION_ADDED_DESCRIPTION:
		"Option **{{optionName}}** `[{{optionId}}]` has been added to the help desk **{{helpDeskName}}** `[{{helpDeskId}}]`!",

	HELP_DESK_OPTION_NOT_FOUND_TITLE: "Help Desk Option Not Found",
	HELP_DESK_OPTION_NOT_FOUND_DESCRIPTION:
		"A help desk option with an ID of `{{optionId}}` was not found for help desk **{{helpDeskName}}** `[{{helpDeskId}}]`!",

	HELP_DESK_OPTION_RESPONSE_SET_TITLE: "Help Desk Option Response Set",
	HELP_DESK_OPTION_RESPONSE_SET_DESCRIPTION:
		"The response for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to `{{response}}`!",

	HELP_DESK_OPTION_DESCRIPTION_SET_TITLE: "Help Desk Option Description Set",
	HELP_DESK_OPTION_DESCRIPTION_SET_DESCRIPTION:
		"The description for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to: {{description}}",

	HELP_DESK_OPTION_DESCRIPTION_RESET_TITLE: "Help Desk Option Description Reset",
	HELP_DESK_OPTION_DESCRIPTION_RESET_DESCRIPTION:
		"The description for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been reset!",

	HELP_DESK_OPTION_EMOJI_SET_TITLE: "Help Desk Option Emoji Set",
	HELP_DESK_OPTION_EMOJI_SET_DESCRIPTION:
		"The emoji for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to {{emoji}}!",

	HELP_DESK_OPTION_EMOJI_RESET_TITLE: "Help Desk Option Emoji Reset",
	HELP_DESK_OPTION_EMOJI_RESET_DESCRIPTION:
		"The emoji for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been reset!",

	HELP_DESK_OPTION_POSITION_NOT_CHANGED_TITLE: "Help Desk Option Position Not Changed",
	HELP_DESK_OPTION_POSITION_NOT_CHANGED_DESCRIPTION:
		"The position for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` was not changed!",

	HELP_DESK_OPTION_POSITION_SET_TITLE: "Help Desk Option Position Set",
	HELP_DESK_OPTION_POSITION_SET_DESCRIPTION:
		"The position for the help desk option **{{optionName}}** `[{{optionId}}]` for help desk **{{helpDeskName}}** `[{{helpDeskId}}]` has been set to {{position}}!",

	HELP_DESK_OPTION_REMOVED_TITLE: "Help Desk Option Removed",
	HELP_DESK_OPTION_REMOVED_DESCRIPTION:
		"Option **{{optionName}}** `[{{optionId}}]` has been removed from the help desk **{{helpDeskName}}** `[{{helpDeskId}}]`!",

	HELP_DESK_OPTION_RENAMED_TITLE: "Help Desk Option Renamed",
	HELP_DESK_OPTION_RENAMED_DESCRIPTION:
		"Option **{{oldOptionName}}** `[{{optionId}}]` has been renamed to **{{newOptionName}}** in help desk **{{helpDeskName}}** `[{{helpDeskId}}]`!",

	SUBSCRIPTIONS_COMMAND_NAME: "subscriptions",
	SUBSCRIPTIONS_COMMAND_DESCRIPTION: "Manage Poddy's subscription system.",

	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_NAME: "group",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_DESCRIPTION: "Manage Poddy's subscription groups.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_DESCRIPTION: "Add a subscription group.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_ID_OPTION_NAME: "id",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_ID_OPTION_DESCRIPTION:
		"The ID of the subscription group (This is the messageGroupId from our Lambda).",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_NAME_OPTION_DESCRIPTION:
		"The name of the subscription group you want to add.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_CATEGORY_OPTION_NAME: "category",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_CATEGORY_OPTION_DESCRIPTION:
		"The category of the subscription group you want to add.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_ADD_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION:
		"The description of the subscription group you want to add.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_REMOVE_SUB_COMMAND_DESCRIPTION: "Remove a subscription group.",
	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_REMOVE_SUB_COMMAND_ID_OPTION_DESCRIPTION:
		"The name of the subscription group you want to remove.",

	SUBSCRIPTIONS_COMMAND_GROUP_SUB_COMMAND_LIST_SUB_COMMAND_DESCRIPTION: "List all subscription groups.",

	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_NAME: "subscribe",
	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_DESCRIPTION: "Subscribe to a subscription group.",
	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_GROUP_OPTION_DESCRIPTION: "The subscription group to subscribe to.",
	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The channel to send the subscription message in.",
	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_USER_OPTION_NAME: "user",
	SUBSCRIPTIONS_COMMAND_SUBSCRIBE_SUB_COMMAND_USER_OPTION_DESCRIPTION:
		"The user to subscribe. If not provided this will default to you.",

	SUBSCRIPTIONS_COMMAND_UNSUBSCRIBE_SUB_COMMAND_NAME: "unsubscribe",
	SUBSCRIPTIONS_COMMAND_UNSUBSCRIBE_SUB_COMMAND_DESCRIPTION: "Unsubscribe from a subscription group.",
	SUBSCRIPTIONS_COMMAND_UNSUBSCRIBE_SUB_COMMAND_USER_OPTION_DESCRIPTION: "The user to unsubscribe.",
	SUBSCRIPTIONS_COMMAND_UNSUBSCRIBE_SUB_COMMAND_GROUP_OPTION_DESCRIPTION: "The subscription group to unsubscribe from.",

	SUBSCRIPTION_GROUP_ADDED_TITLE: "Subscription Group Added",
	SUBSCRIPTION_GROUP_ADDED_DESCRIPTION:
		"The subscription group **{{subscriptionGroupName}}** `[{{subscriptionGroupId}}]` has been added!",

	SUBSCRIPTION_GROUP_NOT_FOUND_TITLE: "Subscription Group Not Found",
	SUBSCRIPTION_GROUP_NOT_FOUND_DESCRIPTION:
		"A subscription group with an ID `{{subscriptionGroupId}}` was not found, please choose one of the provided options!",

	SUBSCRIPTION_GROUP_REMOVED_TITLE: "Subscription Group Removed",
	SUBSCRIPTION_GROUP_REMOVED_DESCRIPTION:
		"The subscription group **{{subscriptionGroupName}}** `[{{subscriptionGroupId}}]` has been removed!",

	SUBSCRIPTION_GROUP_LIST_TITLE: "Subscription Groups",
	SUBSCRIPTION_GROUP_LIST_NO_SUBSCRIPTION_GROUPS_DESCRIPTION:
		"There are currently no subscription groups for this server, add some by doing `/subscriptions group add`!",

	SUBSCRIBED_TITLE: "Subscribed",
	SUBSCRIBED_DESCRIPTION:
		"{{userMention}} has been subscribed to {{subscriptionGroup}}, they will get their notifications in {{channelMention}}!",

	SUBSCRIPTION_NOT_FOUND_TITLE: "Subscription Not Found",
	SUBSCRIPTION_NOT_FOUND_DESCRIPTION:
		"I could not find a subscription for {{userMention}} with the properties you provided.",

	UNSUBSCRIBED_TITLE: "Unsubscribed",
	UNSUBSCRIBED_DESCRIPTION:
		"{{userMention}} has been unsubscribed from {{subscriptionGroup}} and will no longer get their notifications in {{channelMention}}!",

	SUBMIT_COMMAND_NAME: "submit",
	SUBMIT_COMMAND_DESCRIPTION: "Submit a file to one of our events.",
	SUBMIT_COMMAND_EVENT_OPTION_NAME: "event",
	SUBMIT_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to submit the file to.",
	SUBMIT_COMMAND_IMAGE_OPTION_NAME: "file",
	SUBMIT_COMMAND_IMAGE_OPTION_DESCRIPTION: "The file you want to submit to the event.",

	FAILED_FETCHING_IMAGE_TITLE: "Failed Fetching Image",
	FAILED_FETCHING_IMAGE_DESCRIPTION: "I was unable to fetch the image you provided, please try again.",

	EVENTS_COMMAND_NAME: "events",
	EVENTS_COMMAND_DESCRIPTION: "Manage Poddy's events system.",

	EVENTS_COMMAND_CREATE_SUB_COMMAND_NAME: "create",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION: "Create an event.",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_NAME: "name",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_NAME_OPTION_DESCRIPTION: "The name of the event you want to create.",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION: "The channel of the event you want to create.",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_NAME: "description",
	EVENTS_COMMAND_CREATE_SUB_COMMAND_DESCRIPTION_OPTION_DESCRIPTION: "The description of the event you want to create.",

	// TODO: When an event is deleted, send all credit codes that haven't been redeemed and delete them from the DB.
	EVENTS_COMMAND_DELETE_SUB_COMMAND_NAME: "delete",
	EVENTS_COMMAND_DELETE_SUB_COMMAND_DESCRIPTION: "Delete an event.",
	EVENTS_COMMAND_DELETE_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_DELETE_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to delete.",

	EVENTS_COMMAND_LIST_SUB_COMMAND_NAME: "list",
	EVENTS_COMMAND_LIST_SUB_COMMAND_DESCRIPTION: "List all events.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME: "edit",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION: "Edit an event.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_NAME: "name",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_DESCRIPTION: "Edit the name of an event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_NEW_NAME_OPTION_NAME: "name",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_NAME_SUB_COMMAND_NEW_NAME_OPTION_DESCRIPTION: "The new name of the event.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_NAME: "description",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_DESCRIPTION: "Edit the description of an event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_NEW_DESCRIPTION_OPTION_NAME: "description",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_DESCRIPTION_SUB_COMMAND_NEW_DESCRIPTION_OPTION_DESCRIPTION:
		"The new description of the event.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_NAME: "channel",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_DESCRIPTION: "Edit the channel of an event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CHANNEL_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION: "The new channel of the event.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_NAME: "status",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_DESCRIPTION: "Edit the status of an event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_STATUS_OPTION_NAME: "status",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_STATUS_OPTION_DESCRIPTION: "The new status of the event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_STATUS_OPTION_CHOICES_ACTIVE: "Active",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_STATUS_SUB_COMMAND_STATUS_OPTION_CHOICES_INACTIVE: "Inactive",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_NAME: "codes_log_channel",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_DESCRIPTION:
		"Edit the codes log channel of an event.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_EVENT_OPTION_DESCRIPTION:
		"The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_CHANNEL_OPTION_NAME: "channel",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODES_LOG_CHANNEL_SUB_COMMAND_CHANNEL_OPTION_DESCRIPTION:
		"The new codes log channel of the event. Leave blank to remove the codes log channel.",

	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_NAME: "code_amount",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_DESCRIPTION:
		"Edit the amount each code for this event should be worth.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_EVENT_OPTION_NAME: "event",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to edit.",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_AMOUNT_OPTION_NAME: "amount",
	EVENTS_COMMAND_EDIT_SUB_COMMAND_GROUP_CODE_AMOUNT_SUB_COMMAND_AMOUNT_OPTION_DESCRIPTION:
		"The new amount each code for this event should be worth. Leave blank to remove the code amount.",

	REDEEM_CODE_COMMAND_NAME: "redeem_code",
	REDEEM_CODE_COMMAND_DESCRIPTION: "Redeem a code from an event.",
	REDEEM_CODE_COMMAND_EVENT_OPTION_NAME: "event",
	REDEEM_CODE_COMMAND_EVENT_OPTION_DESCRIPTION: "The event you want to redeem the code from.",
	REDEEM_CODE_COMMAND_RUNPOD_EMAIL_OPTION_NAME: "runpod_email",
	REDEEM_CODE_COMMAND_RUNPOD_EMAIL_OPTION_DESCRIPTION: "The RunPod email to redeem the code with.",

	EVENT_CREATED_TITLE: "Event Created",
	EVENT_CREATED_DESCRIPTION: "Event **{{eventName}}** `[{{eventId}}]` has been created!",

	EVENT_NOT_FOUND_TITLE: "Event Not Found",
	EVENT_NOT_FOUND_DESCRIPTION: "An event with an ID `{{eventId}}` was not found!",

	EVENT_DELETED_TITLE: "Event Deleted",
	EVENT_DELETED_DESCRIPTION: "Event **{{eventName}}** `[{{eventId}}]` has been deleted!",

	EVENTS_LIST_TITLE: "Events",
	EVENTS_LIST_NO_EVENTS_DESCRIPTION:
		"There are currently no events for this server, add some by doing `/events create`!",

	EDITED_EVENT_NAME_TITLE: "Event Name Edited",
	EDITED_EVENT_NAME_DESCRIPTION:
		"The name of the event **{{oldEventName}}** `[{{eventId}}]` has been edited to **{{newEventName}}**!",

	EDITED_EVENT_DESCRIPTION_TITLE: "Event Description Edited",
	EDITED_EVENT_DESCRIPTION_DESCRIPTION:
		"The description of the event **{{eventName}}** `[{{eventId}}]` has been edited to: {{newDescription}}",

	EDITED_EVENT_CHANNEL_TITLE: "Event Channel Edited",
	EDITED_EVENT_CHANNEL_DESCRIPTION:
		"The channel of the event **{{eventName}}** `[{{eventId}}]` has been edited to {{newChannel}}!",

	EDITED_EVENT_STATUS_TITLE: "Event Status Edited",
	EDITED_EVENT_STATUS_DESCRIPTION:
		"The status of the event **{{eventName}}** `[{{eventId}}]` has been edited to {{newStatus}}!",

	EDITED_EVENT_CODES_LOG_CHANNEL_TITLE: "Event Codes Log Channel Edited",
	EDITED_EVENT_CODES_LOG_CHANNEL_DESCRIPTION:
		"The codes log channel of the event **{{eventName}}** `[{{eventId}}]` has been edited to {{newChannel}}!",
	EDITED_EVENT_CODES_LOG_CHANNEL_RESET_DESCRIPTION:
		"The codes log channel of the event **{{eventName}}** `[{{eventId}}]` has been reset!",

	EDITED_EVENT_CODE_AMOUNT_TITLE: "Event Code Amount Edited",
	EDITED_EVENT_CODE_AMOUNT_DESCRIPTION:
		"The code amount of the event **{{eventName}}** `[{{eventId}}]` has been edited to {{newAmount}}!",
	EDITED_EVENT_CODE_AMOUNT_RESET_DESCRIPTION:
		"The code amount of the event **{{eventName}}** `[{{eventId}}]` has been reset!",

	ALREADY_SUBMITTED_TITLE: "Already Submitted",
	ALREADY_SUBMITTED_DESCRIPTION: "You've already submitted a file to this event.",

	SUBMITTED_TITLE: "Submitted",
	SUBMITTED_DESCRIPTION: "Your file has been submitted to the event **{{eventName}}** `[{{eventId}}]`!",

	JUMP_TO_SUBMISSION_BUTTON_LABEL: "Jump To Submission",

	NOT_A_SUBMISSION_TITLE: "Not A Submission",
	NOT_A_SUBMISSION_DESCRIPTION: "The message you up voted is not a valid submission message.",

	UP_VOTED_TITLE: "Up Voted",
	UP_VOTED_DESCRIPTION: "You've up voted the submission by {{submissionAuthor}}!",
	UP_VOTED_FOOTER:
		"You may only vote on a singular submission so if you have already voted, your vote has been changed.",

	NOT_A_VALID_EMAIL_TITLE: "Not A Valid Email",
	NOT_A_VALID_EMAIL_DESCRIPTION: "Please provide a valid RunPod email.",

	REDEEMED_CODE_TITLE: "Redeemed Code",
	REDEEMED_CODE_DESCRIPTION: "`{{code}}` is your code for the event **{{eventName}}** `[{{eventId}}]`.",

	CODE_LOG_MESSAGE: `{{userMention}} redeemed the code ||\`{{code}}\`|| worth {{codeAmount}} under the email ||\`{{email}}\`|| for the event **{{eventName}}** \`[{{eventId}}]\`, their account was created at {{creationDate}} and they joined {{joinDate}}!`,

	ACCOUNT_TOO_YOUNG_TITLE: "Account Too Young",
	ACCOUNT_TOO_YOUNG_DESCRIPTION: "Your account is too young to redeem a code, please try again later.",
};
