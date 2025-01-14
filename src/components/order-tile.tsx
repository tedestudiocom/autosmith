export default function OrdreTile() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center w-full text-secondary">
        <p>24 January 2025</p>
        <p>SMITH#111122223333</p>
        <div className="flex flex-col gap-1">
          <p className="bg-primary w-fit px-2 py-1 rounded-md text-white text-xs">
            Home
          </p>
          <p className="">
            First Street, Third Lane,
            <br /> Fourth Avenue, Visakhapatnam, 530045.
          </p>
        </div>
        <button className="bg-secondary bg-opacity-95 hover:bg-opacity-100 duration-300 text-white rounded-lg px-4 py-2">
          Download Receipt
        </button>
      </div>
      <hr />
    </div>
  );
}
