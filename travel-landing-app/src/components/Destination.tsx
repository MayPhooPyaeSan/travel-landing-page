import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";

type CustomArrowProps = {
  onClick: () => void;
  direction: "left" | "right";
};

const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, direction }) => {
  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    top: "35%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1,
    color: "#e44325",
    [direction]: "0",
  };

  return (
    <div className="custom-arrow" style={arrowStyle} onClick={onClick}>
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
  );
};

const Destination = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: (
      <CustomArrow
        direction="right"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <CustomArrow
        direction="left"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const destinations = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/ea/08/c0/ea08c073cae822c603846c5f62ad4e03.jpg",
      name: "Mandalay",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.Wsj28QfypUHW7o1AC2HA9gHaEo&pid=Api",
      name: "Monywa",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/a6/80/e2/a680e24051f5bc123973defeaaf8b2ad.jpg",
      name: "Yangon",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/47/fc/f4/47fcf45e36774bd35413da10f05d00fe.jpg",
      name: "Bagan",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/8c/54/fe/8c54fe3f7aa5d3bf855245cd068c61cb.jpg",
      name: "Kalaw",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/05/5f/2c/055f2c1f29a2ce3484ead5363a4fcf80.jpg",
      name: "Pyin Oo Lwin",
      duration: "15 Days Trip",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/7c/77/51/7c77513e302b3fe8272411913b355cf9.jpg",
      name: "Inle Lake",
      duration: "15 Days Trip",
    },
  ];

  const [likedDestinations, setLikedDestinations] = useState<number[]>([]);

  const handleLikeClick = (index: number) => {
    setLikedDestinations((prevLikedDestinations: any) => {
      if (prevLikedDestinations.includes(index)) {
        return prevLikedDestinations.filter((i: any) => i !== index);
      } else {
        return [...prevLikedDestinations, index];
      }
    });
  };

  return (
    <div className="container">
      <h1>Top Destinations</h1>
      <Slider {...settings} className="side">
        {destinations.map((destination, index) => (
          <div key={index} className="card">
            <img
              src={destination.imageUrl}
              alt={`image-${index}`}
              className="image-slider"
            />
            <div className="card-body">
              <h3>{destination.name}</h3>
              <div className="like-div">
                <p>{destination.duration}</p>
                <FaHeart
                  fontSize={25}
                  color={likedDestinations.includes(index) ? "red" : "gray"}
                  onClick={() => handleLikeClick(index)}
                />
              </div>
              <button className="button">Read More</button>{" "}
              {/* Add your button here */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destination;
