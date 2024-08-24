# Frequently Asked Questions

- [Frequently Asked Questions](#frequently-asked-questions)
  - [I won a prize, how do I claim it?](#i-won-a-prize-how-do-i-claim-it)
  - [Can I rig the giveaway results?](#can-i-rig-the-giveaway-results)
  - [My premium subscription is not working](#my-premium-subscription-is-not-working)
  - [How to use context menus](#how-to-use-context-menus)
  - [My giveaway did not end on time](#my-giveaway-did-not-end-on-time)
  - [The bot does not count my messages](#the-bot-does-not-count-my-messages)
  - [Which leveling system does the bot use?](#which-leveling-system-does-the-bot-use)
  - [Can I remove the original bot after adding the custom premium bot?](#can-i-remove-the-original-bot-after-adding-the-custom-premium-bot)
  - [Can I use another bot's leveling for the giveaway join requirements / extra entries?](#can-i-use-another-bots-leveling-for-the-giveaway-join-requirements--extra-entries)
  - [How to get giveaway IDs / message IDs?](#how-to-get-giveaway-ids--message-ids)
  - [Does/will the bot have an inviters-only or server join requirement giveaway feature](#doeswill-the-bot-have-an-inviters-only-or-server-join-requirement-giveaway-feature)
  - [Can I be a translator for Giveaway Boat?](#can-i-be-a-translator-for-giveaway-boat)
  - [More questions? Want to suggest new features?](#more-questions-want-to-suggest-new-features)

## I won a prize, how do I claim it?

This site is Giveaway Boat's official documentation. If you won a prize in a server that is not Giveaway Boat's support server, the prize is most likely not managed by Giveaway Boat's maintainers, and you should contact that server's support team instead of Giveaway Boat's support team.

## Can I rig the giveaway results?

Giveaway Boat does not condone any kind of fraudulent activities that may be stemmed from usage of the bot. Rigging the results is not possible with Giveaway Boat, or with its premium subscription.

## My premium subscription is not working

If you purchased premium from patreon and linked your Discord account but you can not use the premium features, then you should wait a few minutes and try again. This is due to the synchronization delay of Patreon to Discord.

## How to use context menus

Right-clicking on an active giveaway and navigating to the Apps section will display what is named "Context Menu Commands". The ones with the Giveaway Boat logo are the Context Menu Commands owned by Giveaway Boat.

![Context Menus](/assets/faq/context/context.png)

## My giveaway did not end on time

If your giveaway doesn't end, there might be a couple reasons why.

- The bot might have been bugged during that time (read below).
- There might have been a downtime (wait for the downtime to end, and continue reading below).

If your giveaway does not end properly on time, then use the [context menu command](#how-to-use-context-menus) named "Fix Giveaway". If that does not work, then the winner announcement message may have been deleted. Use the context menu command named "Reroll Command", and the bot will reroll a new winner.

If both of these commands do not fix your giveaway, then it is best that you contact the [support team](https://giveaway.boats/support).

## The bot does not count my messages

If the bot is not properly counting your messages, then it might be because of a couple of reasons:

- The server does not have message counter option enabled
- The channel (or the category the channel is in) is blacklisted from message counter

To enable message counter, use the slash command `/message counter enable`, prefix command `g.message counter enable`, or use the dashboard to toggle the "Message Counter" option in the Settings menu.

To make sure the channel is not blacklisted, in the dashboard, check the "Message Counter Blacklist Channels" option in the Settings menu. If the channel, **or the category** it is included in the option, then remove them, and try again.

If both of these do not fix your issue, then it is best that you contact the [support team](https://giveaway.boats/support).

## Which leveling system does the bot use?

It uses a leveling system identical to that of the MEE6 Discord bot.

Every minute once, you can randomly get anything from 15 to 25 xp by sending a message. This xp gets added to your current xp, and once this reaches the required xp for the next level, you'll level up.

If you'd like to calculate how many messages approximately you'll need to reach a certain level, you can use this calculator: [https://pskramer.github.io/mee6calc/](https://pskramer.github.io/mee6calc/)

## Can I remove the original bot after adding the custom premium bot?

You cannot remove the original bot under any circumstances. If you want the bot to not be seen by other people, then you can remove all of its permissions (mainly View Channel permission). The original bot does not require any permissions for the custom bot to function.

## Can I use another bot's leveling for the giveaway join requirements / extra entries?

Generally, no. The bot is unable to do that.
There are still a couple of options you can use:

- If you use MEE6 Discord bot's leveling system, then you can switch over to Giveaway Boat's system by using the `g.transfer levels --bot mee6` prefix command. You might want to discard MEE6's leveling system, since it only imports the levels, and does not maintain synchronization with MEE6's leveling system. This method is not suitable to be used for extra entries. The method below is still recommended.
- You can add level roles in the leveling bot's configuration (eg. give x role on level 1), and that role can be used for implementing requirements and extra entries, if it is supported by the leveling bot you're using.

## How to get giveaway IDs / message IDs?

1. Go to User Settings.

![User Settings](/assets/faq/message-id/user-settings-button.png)

2. Navigate to the "Advanced" tab and enable the "Developer Mode" option.

![Developer Mode](/assets/faq/message-id/developer-mode.png)

3. Right-click on a giveaway message. Click the "Copy Message ID" button.

![Copy Message ID](/assets/faq/message-id/copy-msg-id.png)

The ID will now be in your clipboard.

## Does/will the bot have an inviters-only or server join requirement giveaway feature

This is against Discord's Platform Manipulation Policy. This feature will never be added to the bot.

> Individuals are prohibited from attempting to manipulate engagement metrics, artificially inflating server membership (for example, via “join-for-join,” “invite rewards,” purchasing fake members), and selling artificial engagement services for online platforms. Individuals also may not attempt to buy or sell Discord assets, such as accounts, usernames, servers, server permissions, or custom server invite links (also called “vanity URLs”).

_[Source](https://discord.com/safety/platform-manipulation-policy-explainer)_

> Invite reward servers are servers that promise some form of perk, often financial, for inviting and getting other users to join said server. We strongly discourage this activity, as it often results in spamming users with unsolicited messages. If it leads to spam or another form of abuse, we may take action including removing the users and server.

_[Source](https://discord.com/safety/360044104071-Tips-against-spam-and-hacking)_

## Can I be a translator for Giveaway Boat?

Yes! We welcome any volunteer with a good language experience of both the translated language and English into the translator team, as a part of an effort to appeal to as many people as possible from all over the world.
To join the translation team, create a Weblate account here: [https://translate.giveaway.boats/accounts/register/](https://translate.giveaway.boats/accounts/register/)
You can immediately get started on the translations and the maintainers will review the changes. For communication related to translations, you can always join the [support team](https://giveaway.boats/support) and create a ticket there.

## More questions? Want to suggest new features?

Join the bot's support server by clicking [here](https://support.giveaway.boats).
