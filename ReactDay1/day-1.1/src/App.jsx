import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const products = [
      {
        id: 1,
        name: "Laptop",
        price: 999.99,
        description: "High performance laptop.",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        description: "High performance smartphone.",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Headphones",
        price: 199.99,
        description: "High performance headphones.",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 4,
        name: "Smartwatch",
        price: 299.99,
        description: "High performance smartwatch.",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return (
      <div style={styles.app}>
        <h1 style={styles.header}>Product List</h1>
        <div style={styles.container}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                style={styles.image}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <button style={styles.button}>Mua ngay</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const styles = {
    app: {
      textAlign: "center",
    },
    header: {
      margin: "20px 0",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "200px",
      textAlign: "left",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "4px",
    },
    button: {
      marginTop: "10px",
      padding: "10px 15px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
  }

export default App
