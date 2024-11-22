import React from "react";

const Product = ({ product, addToCart ,isDarkMode}) => {
  return (
    <div className={`card shadow-sm border-0 h-100 p-3 ${!isDarkMode?"bg-dark-subtle":""} `}>
      <img
        className="card-img-top"
        src={`pictures/${product.thumbnail}`}
        alt={product.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-dark fw-bold">
          { product.title}
        </h5>
        <p className="card-text text-center text-muted">{product.price}</p>
        <button
          className="btn btn-primary w-100 mt-auto"
          onClick={() => {
            return addToCart(product);
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Product;
