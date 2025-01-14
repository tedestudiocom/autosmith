type Service = {
  service_id: number;
  service_name: string;
  service_cover: string;
  service_charge: number;
  service_description: string;
  service_category: string; // Added to enable grouping
};

type GroupedServices = {
  [key: string]: Service[];
};

const groupServicesByCategory = (services: Service[]): GroupedServices => {
  return services.reduce((acc, service) => {
    if (!acc[service.service_category]) {
      acc[service.service_category] = [];
    }
    acc[service.service_category].push(service);
    return acc;
  }, {} as GroupedServices);
};

export { groupServicesByCategory };
export type { Service };
