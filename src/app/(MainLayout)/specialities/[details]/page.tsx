import { Metadata } from "next";

type T = {
  params: { 
    details: string 
  }
}

export const generateMetadata = ({ params }: T): Metadata => {
  return {
    title: `${params.details} - Service`
  }
}

export default function ServiceDetails({
  params,
}: T) {
  return <div>service {params.details}</div>;
}
