import { useState } from "react";

export const DarkModeButton = ({ setIsButtonChecked }) => {
  const [isChecked, SetIsChecked] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          SetIsChecked((prevState) => !prevState);
          setIsButtonChecked(isChecked);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "60px",
          height: "30px",
          backgroundColor: isChecked ? "#333" : "#f9d71c",
          borderRadius: "15px",
          cursor: "pointer",
          position: "relative",
          padding: "5px",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: isChecked ? "#fff" : "#ffa500",
            boxShadow: isChecked ? "0 0 10px #fff" : "0 0 10px #f9d71c",
            position: "absolute",
            top: "50%",
            left: isChecked ? "35px" : "5px",
            transform: "translateY(-50%)",
            transition: "left 0.3s ease, background-color 0.3s ease",
          }}
        ></div>
        <span
          style={{
            fontSize: "12px",
            color: isChecked ? "#fff" : "#333",
            position: "absolute",
            right: "5px",
          }}
        >
          {isChecked ? "🌙" : "☀️"}
        </span>
      </div>
    </div>
  );
};
