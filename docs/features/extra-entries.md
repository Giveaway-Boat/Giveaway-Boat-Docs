---
description: >-
  Information about extra entries
---

# Extra Entries

This option allows you to give select roles more chance on winning a giveaway. By default, people have a 100% / (amount of participants) chance of winning. But if extra entries for the role is set to 2, then they have a 200% / (amount of participants) chance of winning.

Description: These are the entries that the selected roles will get in this giveaway. You can give anywhere between 1 to 100 entries (or 250 entries if you have premium) to a role. By default, all roles are given 1 entry, so you don't have to set a role's entry to 1!

## Related Options

### Stack Entries

Description: When a participant has two or more extra entries roles, say giving 2 and 3 entries, they'll get 6 entries (2 + 3 + 1 default entry) instead of 3 when this option is enabled

## More Information

Let's say there are these roles with the following entries:

- Role A - 3 entries
- Role B - 5 entries
- Role C - 10 entries

### If stacked

User having role A, B gets 3 + 5 + 1 (default entry) = 9 entries (sum of all extra entry roles + the default 1 entry)
User having role B, C, X gets 5 + 10 + 1 (default entry) = 16 entries (only the sum of all roles that has extra entries and default 1 entry, won't take X into consideration since it doesn't have any extra entry set)
User having role X gets 1 entry

### If not stacked

User having role A, B gets 5 entries (the highest entry)
User having role B, C, X gets 10 entries (the highest entry, X won't be considered)
User having role X gets 1 entry

:::tip
By default, entries aren't stacked
:::tip

## Enabling

### Dashboard

You can enable this option in the Settings menu if you want it to affect all giveaways.

![Default Extra Entries](/assets/features/extra-entries/default-extra-entries.png)

You can also enable this option for specific giveaways or templates.

![Extra Entries](/assets/features/extra-entries/extra-entries.png)

### Slash Commands

Use the `--entries` (or `-e`) option in other-options.

![Entries Option](/assets/features/extra-entries/slash-command.png)

### Prefix Commands

Use the `--entries` (or `-e`) option.

![Entries Option (Prefix)](/assets/features/extra-entries/prefix.png)
