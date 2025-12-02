import React, { useState } from "react";
import axios from "axios";

function AddInventory() {
  const [id, setId] = useState("");
  const [prodname, setProdname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState([]);

  const handleSubmit = async () => {
    const obj = {
      id,
      prodname,
      qty,
      price
    };

    await axios.post("http://localhost:8000/add", obj);

    const updated = await axios.get("http://localhost:8000");
    setInventory(updated.data);

    alert("Item Added");
  };

  return (
    <div>
      <h2>Add Inventory</h2>
      <table border="1" cellPadding="10">
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
              <button onClick={handleSubmit}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Updated Inventory</h3>
      <ul>
        {inventory.map((i) => (
          <li key={i.id}>
            {i.id} - {i.prodname} - {i.qty} - {i.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddInventory;
