const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory inventory list
let inventory = [
  { id: 1, prodname: "prod1", qty: 12, price: 12 },
  { id: 2, prodname: "prod2", qty: 1, price: 13 },
  { id: 3, prodname: "prod3", qty: 10, price: 14 },
  { id: 4, prodname: "prod4", qty: 19, price: 16 }
];

// GET: fetch inventory
app.get('/', (req, res) => {
  res.json(inventory);
});

// POST: add new inventory item
app.post('/add', (req, res) => {
  const { id, prodname, qty, price } = req.body;

  const newItem = {
    id: Number(id),
    prodname,
    qty: Number(qty),
    price: Number(price)
  };

  inventory.push(newItem);
  res.json(inventory);
});

// Start server
app.listen(8000, () => {
  console.log('Express server running at http://localhost:8000');
});
