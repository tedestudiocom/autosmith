"use client";

import { useEffect, useState } from "react";
import CartDialog from "./cart-dialog";
import { useProvider } from "@/context/UniversalContext";

export default function Header() {
  var [cartVisible, changeVisibility] = useState(false);
  const { cart } = useProvider();
  function setCartVisible() {
    document.body.style.overflow = cartVisible ? "auto" : "hidden";
    changeVisibility(!cartVisible);
  }

  return (
    <div className="w-full z-40 sticky top-0 bg-white">
      <header className="w-full flex items-center px-8 h-20 justify-between">
        <a href="/" className="w-1/12 self-center place-self-center">
          <img src="/logo.svg" className="" alt="" />
        </a>
        {/* <div className="flex gap-2 items-start justify-center">
            <img className="w-2/5" src="/icons/location.svg" alt="" />
            <p className="text-secondary text-xl font-[900]">Visakhapatnam</p>
          </div> */}
        <div className="flex gap-8">
          <div className="relative">
            <button
              onClick={() => setCartVisible()}
              className="text-lg text-secondary"
            >
              <img src="/icons/cart.svg" alt="" />
            </button>
            <p className="absolute bottom-0 right-0 -mb-3 -mr-2 px-[7px] rounded-full bg-primary text-white text-sm">
              {cart?.length}
            </p>
          </div>
          <button className="text-lg text-secondary">
            <img src="/icons/user.svg" alt="" />
          </button>
        </div>
      </header>
      <div
        className={`fixed overflow-y-scroll max-h-[50vh] shadow-2xl right-12 ${
          cartVisible ? "block" : "hidden"
        }`}
      >
        <CartDialog setCartVisible={setCartVisible} />
      </div>
    </div>
  );
}
