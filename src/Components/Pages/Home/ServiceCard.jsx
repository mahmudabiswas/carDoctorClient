import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
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
        <Link to={`/bookServices/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
