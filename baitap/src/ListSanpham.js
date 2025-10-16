import React, { useEffect, useState } from "react";

const ListSanpham = () => {
  const [products, setProducts] = useState([]);

  // Gọi API khi trang load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {products.map((sp) => (
          <div
            key={sp.id}
            style={{
              height: "400px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={sp.image}
              alt={sp.title}
              style={{
                height: "180px",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px", fontSize: "16px" }}>
              {sp.title.length > 40 ? sp.title.slice(0, 40) + "..." : sp.title}
            </h3>
            <p style={{ color: "green", fontWeight: "bold" }}>${sp.price}</p>
            <p style={{ fontSize: "13px", color: "#555" }}>
              {sp.category.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSanpham;
