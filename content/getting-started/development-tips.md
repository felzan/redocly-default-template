---
title: Development tips - Getting Started
---

# Development tips

This is a collection of a few tips to help ease your development with your API.

---

## Sandbox

When you first start developing an integration, we recommend you use the sandbox.  

There are minor differences to be aware of between the sandbox and live APIs.

### API Base URL

The sandbox base URL is `https://api-sandbox.rebilly.com/` and the 
live base URL is `https://api.rebilly.com/`.

This URL difference will direct requests to the appropriate environment within our system.

### API Keys

API keys are different for different environments, except the username and password are the same.  

However, even though the username and password are the same, the JWT session token cannot be used
across both environments -- it is environment specific.

---

## Your first request

We recommend to follow along and try the requests in the web app first.  Then, we would recommend
trying to use an HTTP client.  To see if you are able to connect to our API, try to connect to our
status API, which requires no authentication:

GET  https://api.rebilly.com/v2.1/status
GET  https://api-sandbox.rebilly.com/v2.1/status

You are able to open that in a browser, because no authentication is required.  Next, try it 
in an HTTP client of your choice, such as Postman.  If the request doesn't work in postman, 
you may need to troubleshoot why it isn't working.  Maybe a typo?  Or maybe SSL certificates aren't
configured for Postman.

---

## API Logs

You should be able to see your requests in the API Logs. To access the API Logs, go to here:

* https://app.rebilly.com/api-logs (for the live environment)
* https://app.rebilly.com/sandbox/api-logs (for the sandbox environment)

These API Logs may help you troubleshoot.
