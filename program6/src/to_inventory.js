import React, { useState, useEffect } from "react";
import axios from "axios";

// Display Inventory Component
function DisplayInventory() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000");
      setRes(response.data);
    };
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
          {res.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.prodname}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Add Inventory Component
function AddInventory() {
  const [id, setId] = useState("");
  const [prodname, setProdname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState([]);

  const SubmitEvent = async () => {
    const data = { id, prodname, qty, price };
    console.log("Adding item: ", data);

    await axios.post("http://localhost:8000/add", data);
    const response = await axios.get("http://localhost:8000");
    setInventory(response.data);

    setId("");
    setProdname("");
    setQty("");
    setPrice("");
  };

  return (
    <div>
      <h1>Add Inventory</h1>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>
              <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Product Name</td>
            <td>
              <input
                type="text"
                value={prodname}
                onChange={(e) => setProdname(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Quantity</td>
            <td>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Price</td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <button onClick={SubmitEvent}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Updated Inventory</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.prodname}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { DisplayInventory, AddInventory };

