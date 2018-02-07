---
title: Overview - Getting Started
---

# Overview

This guide describes how to download transaction data for the purposes of reporting and reconciliation. 

It will demonstrate using both the web app and the API.

___

## Why reconcile?

Occassionally, a transaction request may time out or experience a connection difficulty.  In that case,
a transaction's result may be out of sync with the source of truth.  Rebilly attempts to query and 
update a transaction's result when possible and appropriate.

In addition, some transactions are completed offsite.  They may take anywhere from a few minutes, to a few
days to complete and will have an updated result.  It's important to know you can control settings
per gateway account of how long Rebilly waits for completion of a suspended offsite transaction.  The
default value is 1 hour (3600 seconds), but it can be configured as short or long as you want.

If a transaction isn't completed before then, then Rebilly cancels the transaction.  It's important
to be aware of that time window when it comes time to reconcile transactions.  For example, rather than 
grabbing transactions up to the minute, you may wish to grab them up to an hour ago, or more.

## Sources of truth

The sources of truth are the payment processors.  Rebilly tries to reconcile to have as accurate 
data as possible, so that Rebilly can be used a surrogate for a source of truth.

Rebilly queries transactions that were timeout or connection errors immediately, and again within
a few hours if unsuccessful. 

Rebilly also attempts to download and reconcile yesterday's transaction data to match it against
our recorded data every day. 
