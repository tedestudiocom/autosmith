import { useProvider } from "@/context/UniversalContext";
import { Service } from "@/models/service-model";

export default function ServiceCard({ service }: { service: Service }) {
  const { cart, updateCart } = useProvider();
  let isInCart =
    cart != null &&
    Array.from(cart?.map((_) => _.service_id)).includes(service.service_id);
  return (
    <div id="servicecard" className="text-center flex flex-col gap-2">
      <div className="relative">
        <img
          src="/placeholder.png"
          alt=""
          className="serviceimage rounded-lg"
        />
        <button
          onClick={() => updateCart(service.service_id)}
          id={`${!isInCart ? "addtocartbutton" : ""}`}
          className={`absolute flex items-center justify-center w-full rounded-lg gap-2 text-sm ${
            !isInCart
              ? "bg-white backdrop-blur-sm bg-opacity-70 duration-500 bottom-0 h-full"
              : "bg-primary bottom-0 h-1/6 rounded-sm duration-500"
          }`}
        >
          <img src={`${isInCart ? null : "/icons/plus.svg"}`} alt="" />
          {isInCart ? "Added to Cart" : ""}
        </button>
      </div>
      <h6 className="text-secondary text-sm font-[600]">
        {service.service_name}
      </h6>
      <h6 className="text-secondary text-sm font-[600]">
        ₹{service.service_charge} <br />
        <s className="text-xs font-normal text-gray-500">
          ₹{service.service_charge * 1.7}
        </s>{" "}
      </h6>
    </div>
  );
}
