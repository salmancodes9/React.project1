import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username] = useState("Salman");
  const naviagte = useNavigate();

  const handleNavigate = () =>{
    console.log("i am here")
    naviagte(`/product/${product.id}`)
  }

  const stats = [
    { label: "Orders", value: 12, icon: faTruckFast },
    { label: "Wishlist", value: 5, icon: faHeart },
    { label: "Cart", value: 3, icon: faCartShopping },
    { label: "Cart", value: 3, icon: faCartShopping },
  ];

  const featuredProducts = [
  { id: 1, name: "Blue Denim Jacket", price: "$59.99", image: "https://via.placeholder.com/150"},
  { id: 2, name: "Wireless Headphones", price: "$129.99", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smart Watch", price: "$199.99", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Leather Wallet", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Bluetooth Speaker", price: "$89.99", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Sunglasses", price: "$24.99", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Gaming Mouse", price: "$49.99", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Laptop Backpack", price: "$69.99", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Sports Shoes", price: "$79.99", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Fitness Tracker", price: "$59.99", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Portable Charger", price: "$29.99", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Action Camera", price: "$149.99", image: "https://via.placeholder.com/150" },
  { id: 13, name: "Coffee Maker", price: "$89.99", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Desk Lamp", price: "$34.99", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Water Bottle", price: "$14.99", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Tablet Stand", price: "$19.99", image: "https://via.placeholder.com/150" },
  { id: 17, name: "Wireless Keyboard", price: "$54.99", image: "https://via.placeholder.com/150" },
  { id: 18, name: "USB-C Hub", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 19, name: "Electric Kettle", price: "$49.99", image: "https://via.placeholder.com/150" },
  { id: 20, name: "Bluetooth Earbuds", price: "$79.99", image: "https://via.placeholder.com/150" },
  { id: 21, name: "Tripod Stand", price: "$44.99", image: "https://via.placeholder.com/150" },
  { id: 22, name: "Canvas Sneakers", price: "$59.99", image: "https://via.placeholder.com/150" },
  { id: 23, name: "Travel Mug", price: "$19.99", image: "https://via.placeholder.com/150" }
];


  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0d47a1, #1976d2)",
    color: "white",
    padding: "24px",
    fontFamily: "Arial, sans-serif"
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px"
  };

  const buttonStyle = {
    border: "1px solid white",
    background: "transparent",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "32px"
  };

  const cardStyle = {
    backgroundColor: "#1565c0",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
  };

  const productCardStyle = {
    backgroundColor: "#1565c0",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    cursor: "pointer"
  };

  const addToCartButtonStyle = {
    width: "100%",
    backgroundColor: "#01060aff",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "8px"
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Welcome, {username} 👋</h1>
        <button style={buttonStyle}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px", verticalAlign: "middle" }} /> Profile
        </button>
      </header>

      <section style={gridStyle}>
        {stats.map((stat, i) => (
          <div key={i} style={cardStyle}>
            <FontAwesomeIcon icon={stat.icon} style={{ height: "40px", width: "40px", color: "#90caf9", marginRight: "16px" }} />
            <div>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>{stat.value}</p>
              <p style={{ color: "#bbdefb", fontSize: "14px" }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Featured Products</h2>
        <div style={gridStyle}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={productCardStyle} onClick={handleNavigate}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>{product.name}</h3>
                <p style={{ color: "#bbdefb", marginBottom: "12px" }}>{product.price}</p>
                <button style={addToCartButtonStyle}>
                  <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "6px", verticalAlign: "middle" }} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
