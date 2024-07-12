---
description: >-
  Role requirement for your giveaway
---

# Role Requirement

You can create a requirement for roles in your giveaway. Only people with these roles can enter the giveaway.

## Using Role Requirement Option

### Dashboard

When starting a giveaway, you can add role requirements. The option is called `Required Roles`.

![Role Requirement Option in Dashboard](/assets/features/requirements/role/using/dashboard.png)

### Slash Commands

The option is named `required-role`.

### Prefix Commands

The option is `--required-role` or `-rr`.

![Role Requirement Option in Prefix Command](/assets/features/requirements/role/using/prefix.png)

## More Information

### Participants must have all of the required roles

By default, people having any one of the added required roles can enter the giveaway. If you enable this option, the participant must have _all_ of the required roles.

### Persist Entries

By default, the bot automatically removes the user from the participants list whenever they lose the required role(s). They no longer will have a chance to win the giveaway. If you enable this option, the participant will always remain participating unless explicitly removed.
