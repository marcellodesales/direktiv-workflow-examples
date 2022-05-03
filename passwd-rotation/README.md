# Password rotation workflow

## Inputs to the workflow

The following input definitions apply to this workflow:
- IP address for the device on which the passwords need to be rotated
- Type of device:
    - `linux` for Linux OS
- Username for the device
- Password store type:
    - `hashicorp` for Hashicorp Vault
    - `awsm` for AwS Secrets Manager
    - `gcpkms` for Google Cloud Platform Key Management Service
    - `azurekv` for Azure Key Vault
- ITSM solution for incidents:
    - `snc` for Servicenow.com
    
An example of the input is shown below
```json
{
  "ip": "3.26.24.101",
  "type": "linux",
  "user": "wwonigkeit",
  "vault": "hashicorp",
  "itsm": "snc"
}
```
## Variables for the workflow

The following variables have been defined:
- Variable name: `hashicaddress`
- Variable scope: namespace
- Variable content:

```json
{
    "vault": "http://3.26.24.101:8200",
    "store": "credentials"
}
```

- Variable name: `sncaddress`
- Variable scope: namespace
- Variable content:

```json
{
    "snc": "https://dev80617.service-now.com"
}
```

## Secrets for the workflow

The following secrets have been defined:
- SNC_USER: Servicenow.com username for authentication
- SNC_PASSWORD: Servicenow.com password for user
- VAULT_TOKEN: Hashicorp Vault token for authentication

## Event diagram

![Event diagram](images/workflow-event-diagram-dark.png#gh-dark-mode-only)
![Event diagram](images/workflow-event-diagram-light.png#gh-light-mode-only)