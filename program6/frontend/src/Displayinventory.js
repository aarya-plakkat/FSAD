import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayInventory() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000");
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Inventory Management</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {items.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.prodname}</td>
              <td>{inv.qty}</td>
              <td>{inv.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayInventory;
