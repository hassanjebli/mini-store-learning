import React from "react";

const Search = ({ filterProducts, setInput }) => {
  return (
    <form
      className="d-flex align-items-center justify-content-center my-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="input-group w-100 w-md-50">
        <input
          id="input"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-button"
          style={{
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            paddingLeft: "20px",
          }}
          onChange={(e) => filterProducts(e.target.value)}
        />
        <button
          className="btn btn-danger px-4 ms-2"
          type="submit"
          id="search-button"
          style={{
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => {
            document.querySelector("#input").value = "";
            return setInput("");
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Search;
