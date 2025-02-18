"use client";

import { useProvider } from "@/context/UniversalContext";
import { Service } from "@/models/service-model";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CartDialog({
  setCartVisible,
}: {
  setCartVisible: (arg0: boolean) => void;
}) {
  const router = useRouter();

  const openCheckout = () => {
    router.push("/?checkout=true");
    document.body.style.overflow = "hidden";
    setCartVisible(false);
  };

  const {
    cart,
    updateCart,
    initiateCart,
  }: {
    cart: Service[];
    updateCart: (id: string) => {};
    initiateCart: (data: Service[]) => {};
  } = useProvider();
  useEffect(() => {
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

    if (cart != null && cart.length == 0) {
      console.log("loop check");
      loadCart();
    }
  }, [initiateCart]);

  return (
    <div className="w-fit flex flex-col gap-6 bg-white p-4 rounded-lg shadow-2xl">
      <h3 className="text-primary text-3xl font-[600]">Cart</h3>
      {cart == null || cart.length == 0 ? (
        <p className="text-secondary px-12 py-4">No items in Cart</p>
      ) : (
        <div className="flex flex-col gap-3">
          {Array.from(cart).map((_, index) => (
            <div key={index} className="flex flex-col gap-3 w-full">
              <div className="text-secondary flex justify-between items-center gap-12 w-full">
                <div className="font-[600]">
                  <p>{_.service_name}</p>
                  <p>₹{_.service_charge}</p>
                </div>
                <button onClick={() => updateCart(_.service_id.toString())}>
                  <img src="/icons/cross.svg" alt="" />
                </button>
              </div>
              <hr />
            </div>
          ))}
          <button
            onClick={openCheckout}
            className="w-full bg-primary text-white py-2 rounded-md"
          >
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
}
