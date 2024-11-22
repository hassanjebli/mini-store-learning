import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartItems } from "./CartItems";

const Cart = ({ cart, isDarkMode }) => {
  const displayGlobalTotal = cart.reduce((total, item) => {
    return (total += parseFloat(item.price));
  }, 0);

  return (
    <div>
      {/* Cart Icon Button */}
      <button
        className="btn btn-light position-fixed top-0 end-0 m-3 shadow-lg"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasCart"
        aria-controls="offcanvasCart"
        style={{ zIndex: 1050 }}
      >
        <FaShoppingCart size={24} />
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "0.75rem" }}
        >
          {cart.length > 0 ? cart.length : ""}
        </span>
      </button>

      {/* Offcanvas Cart */}
      <div
        className={`offcanvas offcanvas-end  ${
          isDarkMode ? "" : "bg-dark text-white"
        }`}
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Shopping Cart
          </h5>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <h4 className="fw-bold">Total Price:</h4>
                <span
                  className="badge rounded-pill bg-success"
                  style={{
                    fontSize: "1.25rem",
                    padding: "0.5rem 1rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {displayGlobalTotal.toFixed(2)} DH
                </span>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-primary w-100 py-2"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => console.log(JSON.stringify(cart))}
                >
                  Validate Commande
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
