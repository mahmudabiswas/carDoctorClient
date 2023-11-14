import React from "react";

const BookingRow = ({ booking, handleDelete, handleConfirmBooking }) => {
  const { _id, date, services, price, img, status } = booking;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button
            className="btn btn-circle btn-sm"
            onClick={() => handleDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{services}</td>
        <td>{date}</td>
        <td> ${price} </td>
        <th>
          {status === "confirm" ? (
            <span className="text-3xl font-bold text-purple-800">Confirm</span>
          ) : (
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => handleConfirmBooking(_id)}
            >
              Please Confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
