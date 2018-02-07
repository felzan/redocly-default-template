---
title: Authentication - Getting Started
---

# Authentication

## Private Key Authentication

Your API key is required for authentication to the API.  Each API request requires
some kind of authentication.  For this type of integration, we would recommend
using a private key.  

You can find your API key by logging into [Rebilly](https://app.rebilly.com), and then going to the [API Keys page](https://app.rebilly.com/api-keys).

<div class="attention">We would recommend making a new dedicated key for this integration's purpose.</div>

Include a header named `REB-APIKEY` with each request to complete authentication, with a header like:

```
REB-APIKEY: yourprivatekeyhere
```

## User Password JWT Session Authentication

Our web app requires a username and password to login.  The JWT session is subject to access controls, as defined by the "administrator" user(s)
at the merchant.  Permission can be given to read, write, update, or delete any type of resource.  The JWT is sent as a bearer token in the 
Authorization header.

```
Authorization: Bearer yourtokenhere
```
