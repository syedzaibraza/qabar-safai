type PackageName = "Basic" | "Premium";

type Package = {
    name: PackageName;
    price: number;
    isPopular: boolean;
    services: string[];
  };



export {Package,PackageName}