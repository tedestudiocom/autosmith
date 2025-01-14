import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();

  const closeCheckout = () => {
    document.body.style.overflow = "auto";
    router.back();
  };

  return (
    <div className="bg-black bg-opacity-50 py-12 flex items-center justify-center fixed h-screen overflow-auto top-0 right-0 left-0 z-50 inset-0">
      <div className="p-8 flex flex-col items-center py-12 bg-white w-fit h-fit rounded-2xl relative mt-[34rem]">
        <button onClick={closeCheckout} className="absolute top-4 right-4">
          <img src="./icons/cross.svg" alt="" />
        </button>
        <div className="py-12 flex items-center flex-col">
          <h2 className="text-6xl text-primary font-[900] pb-24">Checkout</h2>
          <div className="flex justify-center gap-24">
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
              <p className="text-green bg-green bg-opacity-10 px-12 py-2 rounded-lg">
                Yay! ₹90 saved on this order!
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start text-secondary">
                  <p className="text-xl">Flat Tyre</p>
                  <div>
                    <p className="text-xl">₹70</p>
                    <s className="text-gray-500 text-sm">₹100</s>
                  </div>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between items-start text-secondary">
                  <p className="text-xl">Flat Tyre</p>
                  <div>
                    <p className="text-xl">₹70</p>
                    <s className="text-gray-500 text-sm">₹100</s>
                  </div>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between items-start text-secondary">
                  <p className="text-xl">Flat Tyre</p>
                  <div>
                    <p className="text-xl">₹70</p>
                    <s className="text-gray-500 text-sm">₹100</s>
                  </div>
                </div>
                <hr className="border-dashed" />
              </div>
              <div className="flex justify-between px-4 py-2 border-secondary border-[1px] rounded-lg w-full my-6">
                <div className="flex items-center gap-3">
                  <img src="/icons/coupon.svg" alt="" />
                  <p className="text-secondary">Coupons & Offers</p>
                </div>
                <p className="text-secondary">2 Offers</p>
              </div>
              <div>
                <p className="text-secondary text-3xl font-[600]">
                  Payment Summary
                </p>
                <div className="py-4 flex flex-col gap-3 text-xl">
                  <div className="flex text-gray-600 justify-between">
                    <p>Service Total</p>
                    <p>₹300</p>
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
                    <p>₹50</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>Taxes & Fee</p>
                    <p>₹69</p>
                  </div>
                  <div className="flex text-gray-600 justify-between">
                    <p>Mechanic Tips</p>
                    <p>₹100</p>
                  </div>
                  <hr className="border-dashed my-2" />
                  <div className="flex text-secondary font-[600] justify-between text-3xl">
                    <p>Total</p>
                    <p>₹359</p>
                  </div>
                  <hr className="border-dashed my-2" />
                  <div className="flex flex-col gap-4">
                    <p className="text-secondary text-3xl font-[600]">
                      Add a tip
                    </p>
                    <div className="flex justify-between gap-4 text-lg">
                      <p className="px-4 py-1 text-secondary border-[1px] border-primary w-fit rounded-lg">
                        ₹20
                      </p>
                      <p className="px-4 py-1 text-secondary border-[1px] border-primary w-fit rounded-lg">
                        ₹50{" "}
                      </p>
                      <p className="px-4 py-1 text-secondary bg-white border-[1px] hover:border-transparent hover:bg-primary hover:bg-opacity-10 border-primary w-fit rounded-lg">
                        ₹100
                      </p>
                      <p className="px-4 py-1 text-secondary border-[1px] border-primary w-fit rounded-lg">
                        custom
                      </p>
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
