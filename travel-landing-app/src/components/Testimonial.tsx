import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/00/2e/0c/002e0c6cd04eb357b8610dc763820a7c.jpg",
      text: "I had an amazing experience with TravelX. The destinations were breathtaking, and the service was top-notch. I highly recommend them for your next adventure!",
      author: "Ruby Kim",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/10/ed/06/10ed0677cadcc112a1543b41acb5b084.jpg",
      text: "Fantastic travel agency! They made our trip unforgettable. The accommodations were luxurious, and the guides were knowledgeable. Can't wait for our next journey with TravelX!",
      author: "Jane",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/dc/4e/5a/dc4e5af441ff32636635b1a2e5ed9c1a.jpg",
      text: "TravelX exceeded our expectations. The attention to detail and personalized service made our vacation truly special. Thank you for creating lasting memories!",

      author: "Lily Rose",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/89/23/3f/89233f1ef4622ecbcf35a7fd1e88c91b.jpg",
      text: "Our family had a fantastic time with TravelX. The itinerary was well-planned, and the activities were enjoyable for everyone. We'll definitely be using their services again!",
      author: "B.I",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/09/c2/29/09c22978046c1bbe70fd46d6f515a677.jpg",
      text: "Exceptional service from TravelX. The team went above and beyond to ensure our trip was seamless. We appreciate their dedication to making our travel experience remarkable!",
      author: "Summer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>What People Say About Us.</h1>
      </div>
      <div className="testimonial-content">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img
                src={testimonial.imageUrl}
                alt={`testimonial-image-${index}`}
                className="testimonial-image"
              />
              <p style={{ fontSize: "20px" }}>{testimonial.text}</p>
              <p style={{ marginTop: "10px" }}>- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
