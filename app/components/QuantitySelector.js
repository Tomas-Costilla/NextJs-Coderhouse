"use client";
import { useState } from "react";
import { useCartContext } from "./context/CartContext";
import { Button } from "@nextui-org/react";
import CartDrawer from "./CartDrawer";

export default function QuantitySelector({ item }) {
  const { addToCart, isProductInCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const handleCartDrawer = () => setOpenCart(!openCart);
  const handleAddProduct = () => {
    if (isProductInCart(item.id)) {
      setOpenCart(true);
      return;
    }

    addToCart({ ...item, quantity });
    setOpenCart(true);
  };

  const handleRestQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="mt-5 flex flex-col items-start gap-5">
      <div className="flex flex-row items-center gap-5">
        <Button color="primary" onClick={() => handleRestQuantity()}>
          -
        </Button>
        <p>{quantity}</p>
        <Button color="primary" onClick={() => setQuantity(quantity + 1)}>
          +
        </Button>
      </div>

      <Button color="primary" onClick={() => handleAddProduct()}>
        Agregar al Carrito
      </Button>
      <CartDrawer open={openCart} handleDrawer={handleCartDrawer} />
    </div>
  );
}
