import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Layout/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const uri = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(uri, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(uri)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const procced = confirm("are you sure you want to delete");
    if (procced) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remming = bookings.filter((bookings) => bookings._id !== id);
            setBookings(remming);
          }
        });
    }
  };

  const handleConfirmBooking = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((bookings) => bookings._id !== id);
          const update = bookings.find((bookings) => bookings._id === id);
          update.status;
          const newBooking = [update, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl">your bookings {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <button className="btn btn-circle btn-sm">
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
              <th>img</th>
              <th>services</th>
              <th>date</th>
              <th>price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirmBooking={handleConfirmBooking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
