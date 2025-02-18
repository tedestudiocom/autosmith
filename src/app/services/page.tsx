"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import ServiceCard from "@/components/service-card";
import React, { useEffect } from "react";
import { useProvider } from "../../context/UniversalContext";
import { groupServicesByCategory, Service } from "@/models/service-model";

export default function Services() {
  const { services, setFetchedServices } = useProvider();

  // useEffect(() => {
  //   const loadServices = async () => {
  //     try {
  //       const servicesData = await fetch("/api/services/fetchServices", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       // const cartData = await fetch("/api/cart/fetchCart", {
  //       //   method: "POST",
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       //   body: JSON.stringify({
  //       //     id: "0089db7f-d8bc-41b6-9050-943e089e44c9",
  //       //   }),
  //       // });

  //       // var resp = await updateCartFunc.json();
  //       // console.log(resp);

  //       var data = await servicesData.json();
  //       data = groupServicesByCategory(data);
  //       setFetchedServices(data);
  //     } catch (error) {}
  //   };

  //   if (services.length === 0) {
  //     loadServices();
  //   }
  // }, [setFetchedServices]);

  return (
    <main className="">
      <Header />
      {services.length == 0 ? (
        <div className="flex w-full h-screen items-center justify-center">
          <p className="text-secondary">Loading...</p>
        </div>
      ) : (
        <div className="px-8 mb-24">
          <div className="w-fit">
            <h2 className="text-8xl font-[900] text-secondary py-12">
              Search for a <span className="text-primary">Service</span>
            </h2>
            <SearchBar></SearchBar>
          </div>
          <div className="flex flex-col gap-8 py-4">
            {Object.keys(services).map((category, index) => (
              <div key={category} className="flex flex-col gap-6 w-fit py-10">
                <h3 className="text-4xl text-secondary font-[600]">
                  {category}
                </h3>
                <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
                  {Array.from({ length: services[category].length }).map(
                    (_, ind) => (
                      <ServiceCard
                        key={ind}
                        service={services[category][ind]}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
            {/* <div className="flex flex-col gap-6 w-fit py-10">
              <h3 className="text-4xl text-secondary">
                Routine Maintainance & Cleaning
              </h3>
              <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
                {Array.from({ length: services.length }).map((_, index) => (
                  <ServiceCard key={index} service={} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 w-fit py-10">
              <h3 className="text-4xl text-secondary">Cables & Levers</h3>
              <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ServiceCard key={index} service={defaultservice} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 w-fit py-10">
              <h3 className="text-4xl text-secondary">Brakes & Suspension</h3>
              <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <ServiceCard key={index} service={defaultservice} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 w-fit py-10">
              <h3 className="text-4xl text-secondary">Engine</h3>
              <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <ServiceCard key={index} service={defaultservice} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
