# Linode event-driven examples

The repository contains a simple workflow that prints information on the Linode platform events received. The following is required for the workflow:

- Install the Linode listener (https://github.com/direktiv/direktiv-listeners/tree/main/linode-receiver)
- Create a linode authentication token and add is as a secret in Direktiv (LINODE_TOKEN)

There are a LOT of Linode events, we've just picked token_create (when a new authentication token is created) and linode_boot (when a machine boots)
