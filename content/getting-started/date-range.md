---
title: Using a Date Range - Getting Started
---

# Using a Date Range

You may limit your export to a date range. The date range may be relative to the current date of the export request, or absolute dates.

## Using The Most Popular Preset Date Ranges

If you want to export yesterday's data, you would include this:
```
"dateRange": {
    "start": "yesterday",
    "end": "today"
}
```

If you want to export the previous month's data, you would include this:
```
"dateRange": {
    "start": "first day of last month midnight",
    "end": "first day of this month midnight"
}
```

If you want to export the most recent 3 days of data, starting at midnight, you would include this:
```
"dateRange": {
    "start": "3 days ago midnight",
    "end": "now"
}
```

---

## Less Popular Date Ranges

You may use an absolute date range too (and mix it with a relative range):

```
"dateRange": {
    "start": "2018-01-21T15:15:15Z",
    "end": "now"
}
```

You may als use it with two absolute date ranges:

```
"dateRange": {
    "start": "2018-01-21T15:15:15Z",
    "end": "2018-02-21T15:15:15Z"
}
```

Absolute ranges are not useful when creating a recurring schedule for a data export.  If an absolute range is used, it will result in
the same exact data exporting each period.

When supplying a "start" or "end" in absolute format, we recommend using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

These are some of the other valid relative inputs, which can be combined:

* yesterday
* midnight
* today
* now
* noon
* tomorrow
* back of
* front of
* first day of
* last day of
* ago
* dayname

Contact us for questions if you need help forming a date range for your use cases.  
