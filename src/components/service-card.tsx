import { Service } from "@/models/service-model";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="text-center flex flex-col gap-2">
      <img src="/placeholder.png" alt="" className="serviceimage rounded-lg" />
      <h6 className="text-secondary text-sm">{service.name}</h6>
    </div>
  );
}
