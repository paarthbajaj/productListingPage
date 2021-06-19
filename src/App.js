import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import Filter from "./components/Filter";
import data from "./data/ProductData.json";

function App() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [brand, setBrand] = useState("");
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    setProduct(data);
    setFilteredProducts(data.productData);
    console.log(...filteredProducts);
  }, []);

  useEffect(() => {
    console.log(sortBy);
    if (sortBy === "Highest") {
      const filtered = [...filteredProducts].sort((a, b) => {
        console.log(...filteredProducts);
        return b.price - a.price;
      });
      setFiltered(filtered);
      console.log(filtered);
    }
    if (sortBy === "Lowest") {
      const filtered = [...filteredProducts].sort((a, b) => {
        console.log(...filteredProducts);
        return a.price - b.price;
      });
      setFiltered(filtered);
      console.log(filtered);
    }
  }, [sortBy]);

  useEffect(() => {
    console.log(brand);
    if (
      brand === "Biba" ||
      brand === "Adidas" ||
      brand === "Nike" ||
      brand === "Puma" ||
      brand === "Lux"
    ) {
      const filtered = [...filteredProducts].filter(
        (item) => item.brand === brand
      );
      setFiltered(filtered);
      setBrand("");
    }
  }, [brand]);

  useEffect(() => {
    if (filtered) {
      setFilteredProducts(filtered);
    }
  }, [filtered, filteredProducts]);

  return (
    <div className="App">
      <Header />
      <Filter
        changeSort={setSortBy}
        sortBy={sortBy}
        brand={brand}
        changeBrand={setBrand}
      />
      {filteredProducts.map((item) => (
        <div className="productList">
          <div className="card" key={item.id}>
            <ProductGallery
              product={product}
              setProduct={setProduct}
              item={item}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
