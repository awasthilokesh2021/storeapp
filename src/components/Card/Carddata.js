import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import axios from "axios";

const Carddata = () => {
  const [dataitem, setdataitem] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8085/product");
      const data = res.data.filter((item) => item.category === "free");
      console.log(data);
      setdataitem(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {dataitem.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carddata;
