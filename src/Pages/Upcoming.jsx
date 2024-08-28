import React, { useState, useEffect } from "react";
import "./Upcoming.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import UpCard from "../Components/UpCard";

function Upcoming() {
  const [slides, setSlides] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/data/upcomingData.json")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="upcoming" className="upcoming">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Upcoming Movies</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            onSwiper={(swiper) => swiper.autoplay.start()}
            className="upcomingSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                  <UpCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Upcoming;
