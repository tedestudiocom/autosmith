"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Checkout from "@/components/checkout";

const UniversalContext = createContext();

export const UniversalProvider = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isCheckout = searchParams.get("checkout") === "true";

  const [services, setServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({});

  // Ensure sessionStorage is accessed only on the client
  useEffect(() => {
    const storedServices = sessionStorage.getItem("services");
    const storedCart = sessionStorage.getItem("cart");
    const storedUserData = sessionStorage.getItem("userData");

    if (storedServices) setServices(JSON.parse(storedServices));
    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedUserData) setUserData(JSON.parse(storedUserData));
  }, []);

  // Save data to sessionStorage whenever state changes
  useEffect(() => {
    sessionStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const setFetchedServices = (servicesData) => {
    setServices(servicesData);
  };

  const initiateCart = (cartData) => {
    console.log("initiateCart", cartData);
    setCart(cartData);
  };

  const updateCart = async (serid) => {
    console.log("updateCart", serid);
    let updatedCart =
      cart != null ? Array.from(cart.map((_) => _.service_id.toString())) : [];
    if (updatedCart.includes(serid)) {
      updatedCart = updatedCart.filter((id) => id !== serid);
    } else {
      updatedCart.push(serid);
    }

    await fetch("/api/cart/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "0089db7f-d8bc-41b6-9050-943e089e44c9",
        service_ids: updatedCart,
      }),
    });

    const loadCart = async () => {
      try {
        const cartData = await fetch("/api/cart/fetchCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "0089db7f-d8bc-41b6-9050-943e089e44c9",
          }),
        });

        var data = await cartData.json();
        initiateCart(data);
      } catch (error) {}
    };

    loadCart();
  };

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <UniversalContext.Provider
      value={{
        services,
        setFetchedServices,
        cart,
        updateCart,
        initiateCart,
        userData,
        updateUserData,
      }}
    >
      {isCheckout && <Checkout />}
      <main className="overflow-hidden">{children}</main>
    </UniversalContext.Provider>
  );
};

export const useProvider = () => useContext(UniversalContext);
