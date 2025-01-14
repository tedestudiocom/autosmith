import OrderTile from "@/components/order-tile";

export default function Orders() {
  return (
    <div className="bg-black bg-opacity-50 py-12 flex items-center justify-center min-h-screen absolute top-0 right-0 left-0 z-50">
      <div className="flex flex-col items-center p-4 bg-white w-full mx-24 rounded-2xl relative">
        <div className="absolute top-4 right-4">
          <img src="./icons/cross.svg" alt="" />
        </div>
        <div className="flex items-start h-full flex-col w-full gap-12 py-4">
          <h2 className="text-6xl text-primary font-[900]">Order History</h2>
          <div className="flex flex-col gap-3 w-full">
            <OrderTile />
            <OrderTile />
            <OrderTile />
            <OrderTile />
          </div>
        </div>
        <img className="pt-24 w-20" src="/logo.svg" alt="" />
      </div>
    </div>
  );
}
