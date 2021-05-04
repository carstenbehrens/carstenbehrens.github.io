---
title: How to drop all collections in a MongoDB database using Mongoose
path: /how-to-drop-all-collections
date: 2020-08-19
summary: Drop all collections with Mongoose.
tags: ["JavaScript", "MongoDB", "Backend"]
---

During testing your API you often want to reset your DB for each test.
This was the problem that I was facing.

I solved this by creating a **reset** endpoint wich drops all collections inside my MongoDB database.

Code sample is worth a thousand words, so here we go:

```javascript
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// @route GET api/reset
// @access Private
router.delete("/", async (req, res) => {
  try {
    const db = mongoose.connection.db;

    // Get all collections
    const collections = await db.listCollections().toArray();

    // Create an array of collection names and drop each collection
    collections
      .map((collection) => collection.name)
      .forEach(async (collectionName) => {
        db.dropCollection(collectionName);
      });

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
```
