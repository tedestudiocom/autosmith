import SearchBar from "@/components/search-bar";
import ServiceCard from "@/components/service-card";
import { defaultservice } from "@/constants/constants";

export default function Services() {
  return (
    <main className="px-8 mb-24">
      <div className="w-fit">
        <h2 className="text-8xl font-[900] text-secondary py-12">
          Search for a <span className="text-primary">Service</span>
        </h2>
        <SearchBar></SearchBar>
      </div>
      <div className="flex flex-col gap-8 py-4">
        <div className="flex flex-col gap-6 w-fit py-10">
          <h3 className="text-4xl text-secondary">
            Routine Maintainance & Cleaning
          </h3>
          <div className="grid grid-flow-row-dense grid-cols-8 gap-6 gap-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ServiceCard key={index} service={defaultservice} />
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
        </div>
      </div>
    </main>
  );
}
