import SearchBar from "@/components/search-bar";
import ServiceCard from "@/components/service-card";
import { defaultservice } from "@/constants/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex w-full justify-between items-start gap-12 px-8">
        <div className="flex flex-col gap-8 w-fit">
          <h2 className="text-7xl text-secondary font-[900] leading-[1.3] text-left">
            Professional <br />{" "}
            <span className="text-tertiary">Motorcycle</span> Services <br />
            <span className="text-primary">at your Doorstep</span>
          </h2>
          <SearchBar></SearchBar>
          <div className="grid gap-6 grid-flow-row-dense grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ServiceCard key={index} service={defaultservice} />
            ))}
          </div>
          <div className="relative items-center justify-center flex">
            <a
              className="text-center text-primary text-opacity-75 px-2 bg-white hover:text-opacity-100 duration-200 w-fit self-center"
              href="/services"
            >
              view all
            </a>
            <hr className="w-full absolute -z-10" />
          </div>
        </div>
        <div className="-z-10 top-12 right-12">
          <div className="flex items-end justify-end">
            <img
              className="rounded-full float-end place-self-end w-8/12"
              src="/carousel-one.jpg"
              alt=""
            />
            <img
              className="rounded-full float-end place-self-start w-4/12"
              src="/carousel-two.jpg"
              alt=""
            />
          </div>
          <img
            className="rounded-full float-end place-self-end w-5/12 -mt-32"
            src="/carousel-four.jpg"
            alt=""
          />
          <img
            className="rounded-full float-start place-self-start w-5/12 m-6"
            src="/carousel-three.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen py-24 relative">
        <div className="w-fit items-end flex flex-col gap-2 px-8">
          <h2 className="text-6xl text-primary font-[900]">
            Professional. <span className="text-secondary">Reliable.</span>{" "}
            <span className="text-tertiary">Trustworthy.</span>
          </h2>
          <hr className="w-5/12 border-secondary" />
          <p className="text-secondary items-center flex gap-[0.3rem] text-end">
            the reasons for chosing{" "}
            <img className="h-[0.8em]" src="/logo.svg" alt="" />
          </p>
        </div>
        <div className="absolute -z-10 top-0 left-0">
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              className="h-screen w-screen object-fill"
            >
              <source src="/showreel.mp4" />
            </video>
            <div
              id="videogradient"
              className="flex w-full h-full absolute top-0 z-10 bg-black"
            ></div>
            {/* <p className="absolute z-20 right-6 bottom-6 text-secondary">
              scroll more, a little is left
            </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
