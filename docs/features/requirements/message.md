---
description: >-
  Message requirement for your giveaway
---

# Message Requirement

You can create a minimum requirement for how many messages a participant has to send in the server to participate in the giveaway.

## Enabling

### Enabling Message Counter

Message counting is a completely opt-in feature. You have to enable the "Message Counter" option for the bot to be allowed to count members' messages.

#### Dashboard

#### Slash Commands

Use the `/message counter enable` command to enable message counter.

#### Prefix

Use the `g.message counter enable` command to enable message counter.

### Using Message Requirements Option

#### Dashboard

When starting a giveaway, you can add message requirements. This is split into three options.

- Required Daily Messages
- Required Weekly Messages
- Required Monthly Messages
- Required Total Messages

![Message Requirement Options in Dashboard](/assets/features/requirements/message/using/dashboard.png)

#### Slash Commands

The requirement is split into three options.

- required-daily-messages
- required-weekly-messages
- required-monthly-messages
- required-total-messages

![Message Requirement Options in Slash Command](/assets/features/requirements/message/using/slash-command.png)

#### Prefix Commands

There are three options you can specify:

- --required-daily-messages / -rdm
- --required-weekly-messages / -rwm
- --required-monthly-messages / -rmm
- --required-total-messages / -rtm

![Message Requirement Options in Prefix Command](/assets/features/requirements/message/using/prefix-commands.png)

## More Information

### Reset Times

- Daily Messages: Every day, 00:00 UTC
- Weekly Messages: Every Sunday, 00:00 UTC
- Monthly Messages: Every 1st day of the month, 00:00 UTC
- Total Messages: Never resets automatically

### Blacklisting

You can blacklist channels from being counted in the message counter.

![Blacklist option on dashboard](/assets/features/requirements/message/blacklist.png)

If you want to whitelist, click the "Add all" button and deselect the ones you want whitelisted.
