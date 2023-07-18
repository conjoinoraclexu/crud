const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item');

const app = express();

app.use(express.json()); // for parsing application/json

app.get('/items', async (req, res) => {
  const items = await Item.find({});
  res.send(items);
});

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.send(savedItem);
});

app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body);
  res.send(updatedItem);
});

app.delete('/items/:id', async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  res.send(deletedItem);
});
