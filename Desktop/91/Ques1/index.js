const axios = require("axios");

async function fetchProducts() {
  try {
    const res = await axios.get("http://20.244.56.144/test/products", {
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
      }
    });
    console.log(res.data); // this will print the JSON data
  } catch (err) {
    console.error("Error fetching products:", err.response?.data || err.message);
  }
}

fetchProducts();



//react
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://20.244.56.144/test/products", {
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
