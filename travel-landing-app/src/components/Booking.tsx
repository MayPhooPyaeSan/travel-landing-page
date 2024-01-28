import React from "react";

const Booking = () => {
  return (
    <div className="booking-div">
      <h1>Easy and fast</h1>
      <div className="booking-container">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/6b/7f/27/6b7f27fcae7ed0afd1e973ed0c0228a1.jpg"
            alt=""
            className="responsive-image"
          />
        </div>
        <div className="content-container">
          <h1>Book Your Next Trip In 3 Easy Steps</h1>
          <div>
            <h6>🎀 Choose Destination</h6>
            <p>
              Discover a world of possibilities and pick the perfect getaway.
            </p>
          </div>
          <div>
            <h6>🎀 Make Payment</h6>
            <p>
              Enjoy a seamless payment experience to confirm your travel plans.
            </p>
          </div>
          <div>
            <h6>🎀 Reach Airport on Selected Date</h6>
            <p>
              Arrive at the airport on your selected date and start your
              adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
