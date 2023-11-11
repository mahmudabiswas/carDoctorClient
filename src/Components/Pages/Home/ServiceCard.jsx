import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img src={img} alt="car service" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-red-500 font-bold"> $: {price}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
