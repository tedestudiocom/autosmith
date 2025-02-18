"use client";

import { useProvider } from "@/context/UniversalContext";
import { Service } from "@/models/service-model";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();

  const closeCheckout = () => {
    document.body.style.overflow = "auto";
    router.back();
  };

  const {
    cart,
    updateCart,
  }: {
    cart: Service[];
    updateCart: (id: string) => {};
  } = useProvider();
  const cartTotal = cart.reduce((acc, curr) => acc + curr.service_charge, 0);
  var [tips, setTip] = useState(0);

  const setTips = (tip: number) => {
    if (tip == tips) {
      setTip(0);
    } else {
      setTip(tip);
    }
  };

  const getTotal = () => {
    return cartTotal + cartTotal * 0.0578 + cartTotal * 0.18 + tips;
  };

  return (
    <div className="bg-black bg-opacity-50 py-12 flex items-center justify-center fixed h-screen overflow-auto top-0 right-0 left-0 z-50 inset-0">
      <div className="p-16 flex flex-col items-center py-12 bg-white w-fit h-fit rounded-2xl relative mt-[34rem]">
        <button onClick={closeCheckout} className="absolute top-4 right-4">
          <img src="./icons/cross.svg" alt="" />
        </button>
        <div className="py-12 flex items-center flex-col">
          <h2 className="text-6xl text-primary font-[900] pb-24">Checkout</h2>
          <div className="flex justify-center gap-48">
            <div className="flex flex-col gap-5 text-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 p-3 bg-primary bg-opacity-20 flex items-center justify-center rounded-lg">
                  <img src="/icons/id.svg" className="" alt="" />
                </div>
                <div className="text-secondary font-[600] flex flex-col gap-1">
                  <p className="text-lg">Name</p>
                  <p className="text-gray-400">Personel</p>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 p-3 bg-primary bg-opacity-20 flex items-center justify-center rounded-lg">
                  <img src="/icons/check.svg" className="" alt="" />
                </div>
                <div className="text-secondary font-[600] flex flex-col gap-1">
                  <p className="text-lg">Send booking details to,</p>
                  <p className="text-gray-400">+91 12345 67890</p>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 p-3 bg-primary bg-opacity-20 flex items-center justify-center rounded-lg">
                  <img src="/icons/motorcycle.svg" className="" alt="" />
                </div>
                <div className="text-secondary font-[600] flex flex-col gap-1 h-full w-full">
                  <button className="w-full h-full bg-white text-gray-600 border-primary border-[1px] px-12 py-1 rounded-lg">
                    select your vehicle
                  </button>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 p-3 bg-primary bg-opacity-20 flex items-center justify-center rounded-lg">
                  <img src="/icons/calendar.svg" className="" alt="" />
                </div>
                <div className="text-secondary font-[600] flex flex-col gap-1 w-full h-full">
                  <button className="w-full h-full bg-white text-gray-600 border-primary border-[1px] px-12 py-1 rounded-lg">
                    select slot
                  </button>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 p-3 bg-primary bg-opacity-20 flex items-center justify-center rounded-lg">
                  <img src="/icons/address.svg" className="" alt="" />
                </div>
                <div className="text-secondary font-[600] flex flex-col gap-1 w-full h-full">
                  <button className="w-full h-full bg-white text-gray-600 border-primary border-[1px] px-12 py-1 rounded-lg">
                    select address
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-green bg-green bg-opacity-10 px-12 py-2 mb-6 rounded-lg">
                Yay! ₹90 saved on this order!
              </p>
              {Array.from(cart).map((_, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start text-secondary">
                    <div className="flex gap-2">
                      <button
                        key={index}
                        onClick={() => {
                          updateCart(_.service_id.toString());
                        }}
                      >
                        <img src="/icons/cross.svg" alt="" />
                      </button>
                      <p className="text-lg">{_.service_name}</p>
                    </div>
                    <div>
                      <p className="text-lg">₹{_.service_charge}</p>
                      <s className="text-gray-500 text-sm">
                        ₹{_.service_charge * 1.7}
                      </s>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                </div>
              ))}

              <div className="flex justify-between px-4 py-2 border-secondary border-[1px] rounded-lg w-full my-6">
                <div className="flex items-center gap-3">
                  <img src="/icons/coupon.svg" alt="" />
                  <p className="text-secondary">Coupons & Offers</p>
                </div>
                <p className="text-secondary">2 Offers</p>
              </div>
              <div>
                <p className="text-secondary text-2xl font-[600]">
                  Payment Summary
                </p>
                <div className="py-4 flex flex-col gap-3 text-lg">
                  <div className="flex text-gray-600 justify-between">
                    <p>Service Total</p>
                    <p>₹{cartTotal}</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>Discount</p>
                    <p>₹90</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>
                      Coupon - <span className="text-primary">FIRSTSMITH</span>
                    </p>
                    <p>₹90</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>Platform Fee</p>
                    <p>₹{cartTotal * 0.0578}</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>Taxes & Fee</p>
                    <p>₹{cartTotal * 0.18}</p>
                  </div>
                  {tips != 0 && (
                    <div className="flex text-gray-600 justify-between">
                      <p>Mechanic Tips</p>
                      <p>₹{tips}</p>
                    </div>
                  )}
                  <hr className="border-dashed my-2" />
                  <div className="flex text-secondary font-[600] justify-between text-2xl">
                    <p>Total</p>
                    <p>₹{getTotal()}</p>
                  </div>
                  <hr className="border-dashed my-2" />
                  <div className="flex flex-col gap-3">
                    <p className="text-secondary text-xl font-[600]">
                      add a tip
                    </p>
                    <div className="flex justify-between gap-4 text-lg">
                      {Array.from([10, 20, 50, 100]).map((_, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => setTips(_)}
                            className={`px-4 py-1 text-secondary border-primary border-opacity-50 border-[1px] w-full text-center rounded-lg ${
                              tips == _
                                ? "border-opacity-100 bg-primary text-white"
                                : ""
                            }`}
                          >
                            ₹{_}
                          </button>
                        );
                      })}

                      {/* <input
                        type="number"
                        placeholder="custom"
                        className={`px-4 py-1 text-secondary border-primary border-opacity-50 border-[1px] w-full text-center rounded-lg ${
                          tips == _
                            ? "border-opacity-100 bg-primary text-white"
                            : ""
                        }`}
                      ></input> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="p-4 w-full bg-primary text-white rounded-lg my-10">
            Proceed to Payment
          </button>
        </div>
        <img className="absolute bottom-4 py-5" src="/logo.svg" alt="" />
      </div>
    </div>
  );
}
