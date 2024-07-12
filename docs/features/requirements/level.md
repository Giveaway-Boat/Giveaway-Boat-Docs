---
description: >-
  Level requirement for your giveaway
---

# Leveling Requirement

The bot has a custom leveling system. It uses MEE6's system of XP gaining. It is also possible to import levels from MEE6.

## Enabling / Disable

### Dashboard

In the Settings tab, you can enable or disable the "Leveling" option. After enabling, 4 additional options will appear.

![Leveling in Dashboard](/assets/features/requirements/leveling/enabling/dashboard.png)

#### Slash Commands

Use the `/leveling enable` command to enable leveling, and `/leveling disable` to disable it.

![Enable Leveling with Slash Commands](/assets/features/requirements/leveling/enabling/slash.png)

#### Prefix

Use the `g.leveling enable` command to enable leveling, and `g.leveling disable` to disable it. You can also use `g.leveling toggle` to toggle between them.

![Enable Leveling with Prefix Commands](/assets/features/requirements/leveling/enabling/prefix.png)

### Using Leveling Option

#### Dashboard

When starting a giveaway, you can add a leveling requirement. Note that it will only show the option if leveling is enabled.

![Leveling Requirement Options in Dashboard](/assets/features/requirements/leveling/enabling/dashboard.png)

#### Slash Commands

The option name is `required-level`.

#### Prefix Commands

You can specify the `--required-level` or `-rl` option.

## More Information

### Level up message

![Level up message](/assets/features/requirements/leveling/message.png)

### Leveling requirement calculator

You can use this calculator by pskramer on github to calculate approximately how many messages you need to post in order to get to a specific level.

[https://pskramer.github.io/mee6calc/](https://pskramer.github.io/mee6calc/)
