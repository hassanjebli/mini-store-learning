import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Search from "./Search";

export const Store = () => {
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        product.quantity = 1;
        return [...prevCart, product];
      }
    });
  };

  const products = [
    {
      id: 1,
      title: "PC Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "HP16D0195NF.jpg",
    },
    {
      id: 2,
      title: "PC Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "HP14424U3EA.jpg",
    },
    {
      id: 3,
      title: "Chromebook Acer",
      price: "3640 DH",
      thumbnail: "NXATHEF002.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "HUA6901443442959.jpg",
    },
  ];

  const filterProducts = (input) => {
    setInput(input);
  };

  const tempProducts = products.filter((product) => {
    return (
      product.id.toString().includes(input) ||
      product.title.includes(input) ||
      product.price.includes(input)
    );
  });

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <Search filterProducts={filterProducts} setInput={setInput} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-dark mb-4 display-6 fw-bold">
              Our Premium Products
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {tempProducts.length > 0 ? (
            tempProducts.map((product, key) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
                <Product product={product} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-secondary text-center" role="alert">
                <h3 className="mb-0">No Products Found</h3>
              </div>
            </div>
          )}
        </div>

        <Cart cart={cart} />
      </div>
    </div>
  );
};
