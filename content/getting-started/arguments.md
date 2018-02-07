---
title: Using Arguments - Getting Started
---

# Using Arguments

Arguments may optionally be included with the request to export data.  These can filter out data, sort the data, or use criteria to filter the data.

Rebilly's web app uses criteria to filter, and we know it can be daunting to learn how to form and structure criteria.


```
"arguments": {
    "filter": "string",
    "sort": [
        "string"
    ],
    "q": "string",
    "criteria": {
        "op": "and"
    }
}
```
---

## Using Criteria

If you wish to use criteria, we recommend first making a request using the Rebilly web app, and then inspecting the API Logs to see how the specific criteria is
formed for whatever you are attempting to do.

Here are some requests excerpts with some common criteria used.

To filter where the result is approved:
```
  "arguments": {
    "criteria": {
      "op": "and",
      "conditions": [
        {
          "op": "in",
          "path": "/result",
          "values": [
            "approved"
          ]
        }
      ]
    }
  },
```

You can also filter by multiple conditions.  Again, we recommend doing it in the web app and checking the API logs for the structure of the request:
```
    "criteria": {
      "op": "and",
      "conditions": [
        {
          "op": "in",
          "path": "/type",
          "values": [
            "authorize",
            "capture",
            "sale"
          ]
        },
        {
          "op": "in",
          "path": "/result",
          "values": [
            "approved"
          ]
        }
      ]
    }
  },
```

Please contact us if you need help.
