---
description: >-
  Prevent giveaway participant botting
---

# Scheduling Giveaways

This feature allows you to schedule giveaways for the future. The bot automatically creates the giveaway when it is time.

## Using

### Dashboard

You can create schedules in the "Schedule" tab in the dashboard. Once there, click on the "Schedule a Giveaway" button to start creating your giveaway.

You can see a new option named "Starts In Duration". Whatever amount of time you put in here, the giveaway will start in that much time. For example, if you put "4 hours" (or "4h"), the giveaway will start in 4 hours.

![Starts In Duration Option](/assets/features/scheduling/starts-in.png)

### Slash Commands

You can create scheduled giveaways using the `/schedule create` command. You can pass in the `starts-in` option.

![Schedule Create Command in Slash Commands](/assets/features/scheduling/using/slash.png)

### Prefix Commands

You can create scheduled giveaways using the `g.schedule create` command. The starts in duration option is `--starts-in` or `-si`.

![Scheduled Giveaway With Prefix Commands](/assets/features/scheduling/using/prefix.png)

## More Information

### Automatically Repeat Giveaways

:::info
The features that will be further talked about is only available for premium users. You can purchase premium [here](https://giveaway.boats/premium).
:::

#### Dashboard

You can enable the "Repeat Duration" option when creating a giveaway, template, or a scheduled giveaway. This is the delay you want to have in between a giveaway ending and the same giveaway being repeated. When you enable this option, you will see another option called "Repeat Times". This option decides how much time this giveaway will repeat itself. It will repeat itself indefinitely if left disabled.

![Options in dashboard](/assets/features/scheduling/using/repeat/dashboard.png)

#### Slash Commands / Prefix Commands

You can use the option `--repeat-duration` or `-rd` to specify repeat durations, and `--repeat-times` or `-rt` option to specify the amount of repeats (specify these options in `other-options` option if using slash commands.)
