---
sidebar_position: 2
---

# Creating A Giveaway

Giveaways are what Giveaway Boat is made for. You are at the part where you can start utilizing Giveaway Boat to the fullest.

There are multiple ways to create giveaways.

- You can use the dashboard. This helps with visually configuring your giveaway.
- Slash commands. This is useful to some extend as we can clearly see the options the bot provides. But due to Discord's limitations, we can't provide all options.
- Prefix commands. This method is generally frowned upon, especially by newcomers. These prefix commands (message commands) are only for people who are well-versed with the bot's options and how to use it. You would have to guess all the options the bot has.

## Using the Dashboard to create a giveaway

To start, head on to the dashboard by clicking [here](https://giveaway.boats/dashboard). Find your server and click the "Dashboard" button next to it.

![Dashboard](/assets/basics/setup/dashboard.png)

Click the "Giveaways" button in the navigation bar at the top to view all giveaways. Click the blue "Create a Giveaway" button that appears.

![Create a Giveaway](/assets/basics/creating-a-giveaway/dash/create-a-giveaway.png)

See the "Options" section of this page for more details about the options by clicking [here](#options).

## Using slash commands to create a giveaway

This is one of the more faster or way to create a giveaway, as you can do it without going outside of Discord. But this method comes with its own downsides as Discord limits many things.

To start, use the `/giveaway create` command on Discord. Verify that the name of the bot of the command is "Giveaway Boat".

![Giveaway Create](/assets/basics/creating-a-giveaway/slash/giveaway-create.png)

Press the tab button on your keyboard, or click the box that opens up.

![Giveaway Options](/assets/basics/creating-a-giveaway/slash/giveaway-options.png)

Once you have filled the `prize`, `winners`, and `duration` options, click the Enter button on your keyboard to execute the command.
A message with three buttons will appear. If you want to edit the giveaway, click the Edit button. If you want to cancel it, click the Cancel button. If you want to start the giveaway right away, click the Start button.

![Giveaway Started](/assets/basics/creating-a-giveaway/slash/giveaway-started.png)

See the "Options" section of this page for more details about the options by clicking [here](#options).

## Using prefix commands to start a giveaway

Since this is a widely adopted old method, the developers has made it easy to create a giveaway using this method. With this method, newcomers can't make use of or know all of the features.

The prefix for the bot in your server may differ, but the default prefix is `g.`, and we will use that as the substitute for your server's prefix. To know more, click [here](./setup/prefix.md) to go to the Prefix tutorial section.

Use the command `g.start`. The bot will ask you four different questions.

![Giveaway Create Questions](/assets/basics/creating-a-giveaway/prefix/giveaway-create.png)

Once you follow through all of the bot's instructions, the giveaway will be started in the given channel.

![Giveaway Started](/assets/basics/creating-a-giveaway/prefix/giveaway-started.png)

## Options

You can see all the options available in the bot [here](https://giveaway.boats/faq/options). The required options are `Name / Prize`, `Winners`, and `Duration`.

### Name / Prize

This will be the title of the embed that will be sent by the bot, and the prize you are giving away through the bot.

![Giveaway Prize](/assets/basics/creating-a-giveaway/giveaway-prize.png)

## Winners

The number that you put in as the value of this option will be how many people can win this giveaway. If you put only 1, only 1 person can win. But if you put more, more people will be taken as winners.

![Giveaway Winner](/assets/basics/creating-a-giveaway/giveaway-winners.png)

## Duration

The timestamp that you put in will be the time in which the giveaway will end after it starts. So, if you put `1 day` in it, then once it starts, after one day, the giveaway will end and pick the winners.

![Giveaway Duration](/assets/basics/creating-a-giveaway/giveaway-duration.png)

For example:

- 1d: One day
- 2w3d: Two weeks and three days
- 1m: One minute
- 1mo: One month
