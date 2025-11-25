import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AddInventory, DisplayInventory } from './Inventory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddInventory />
    <hr />
    <DisplayInventory />
  </React.StrictMode>
);
