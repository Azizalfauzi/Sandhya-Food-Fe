import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const saveProducts = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Add New Products</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProducts}>
              <p className="has-text-centered">{message}</p>
              <div className="field">
                <div className="label">Product Name</div>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="label">Price</div>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProducts;
