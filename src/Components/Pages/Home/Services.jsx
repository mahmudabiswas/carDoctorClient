import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <div className="mt-10 mb-10">
      <div className="text-center ">
        <h3 className="text-red-500 text-xl text-bold ">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {servicesData.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="card-actions m-6 ">
        <button className="btn text-center m-auto  text-red-500">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
