import React from "react";
import { useParams } from "react-router-dom";


const Product = () => {
   const {id} = useParams();


   console.log(id)



  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e3f2fd", // light blue background
    padding: "20px",
    minHeight: "100vh",
    color: "#0d47a1", // dark blue text
  };

  const cardStyle = {
    backgroundColor: "#bbdefb", // lighter blue
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "300px",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0d47a1",
  };

  const buttonStyle = {
    backgroundColor: "#0d47a1",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>Product Page</h1>
      <div style={cardStyle}>
        <img
          src="https://via.placeholder.com/250x200/90caf9/0d47a1?text=Blue+Product"
          alt="Product"
          style={imageStyle}
        />
        <h2>Blue Denim Jacket</h2>
        <p style={priceStyle}>₹2,499</p>
        <p>
          Stylish and comfortable blue denim jacket perfect for all seasons.
        </p>
        <button style={buttonStyle}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
