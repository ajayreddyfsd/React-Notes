import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onBuy }) => (
  <div>
    <p>{product.name}</p>
    <button onClick={() => onBuy(product.id)}>Buy</button>
  </div>
);

const Shop = ({ taxRate }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ Function depends on cart, taxRate, and navigate
  const handleBuy = useCallback(
    (productId) => {
      const totalPrice = 100 * taxRate; // using prop
      setCart([...cart, { id: productId, price: totalPrice }]); // using state
      navigate("/checkout"); // using navigate from hook
    },
    [cart, taxRate, navigate]
  ); // include all dynamic values

  const products = [
    { id: 1, name: "Hat" },
    { id: 2, name: "Shoes" },
  ];

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onBuy={handleBuy} />
      ))}
    </div>
  );
};

export default Shop;
