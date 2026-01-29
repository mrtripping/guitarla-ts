import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";
import { MAX_ITEMS, MIN_ITEMS } from "../config/constants";
import type { Guitar, CartItem } from "../types";

export const useCart = () => {

  const [cart, setCart] = useState(initialCart);
  const [data] = useState(db);

  function initialCart(): CartItem[] {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }

  function addToCart(guitar: Guitar) {
    // Verificar si el artículo ya está en el carrito
    const itemExists = cart.findIndex((item) => guitar.id === item.id);
    if (itemExists >= 0) {
      // Controlamos que no se exceda el máximo de unidades por artículo
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = { ...guitar, quantity: 1 };
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id: CartItem["id"]) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id: CartItem["id"]) {
    const updatedCart = cart.map((item) => 
      item.id === id && item.quantity < MAX_ITEMS 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(id: CartItem["id"]) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      if (item.id === id && item.quantity === MIN_ITEMS) {
        return null;
      }
      return item;
    }).filter(Boolean) as CartItem[];
    
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );
  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
