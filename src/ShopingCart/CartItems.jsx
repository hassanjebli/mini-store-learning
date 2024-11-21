import React from "react";

export const CartItems = ({ item }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3 p-3 border rounded shadow-sm bg-light">
      {/* Product Image */}
      <div className="d-flex align-items-center">
        <img
          src={`pictures/${item.thumbnail}`}
          alt={item.title}
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
            marginRight: "1rem",
            borderRadius: "8px",
          }}
        />
        {/* Product Details */}
        <div>
          <h6 className="mb-0">{item.title}</h6>
          <small className="text-muted">
            Subtotal: ${parseFloat(item.price)}
          </small>
        </div>
      </div>

      {/* Quantity & Subtotal */}
      <div className="text-center">
        <p className="mb-0">Qty: {item.quantity}</p>
        <small className="text-muted">
          Subtotal:{parseFloat(item.price) * item.quantity}
        </small>
      </div>
    </div>
  );
};
