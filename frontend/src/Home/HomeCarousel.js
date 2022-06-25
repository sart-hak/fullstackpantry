import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";
import "../styles/HomeCarousel.css";
import pic from "../images/testimonial.png";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function HomeCarousel() {
  const [testimonials, setTesmonials] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/gettestimonials").then((response) => {
      // console.log(response.data);
      setTesmonials(response.data);
    });
  }, [testimonials]);

  return (
    <div className="HomeCarouselContainer">
      <div className="HomeCarousel">
        <p>TESTIMONIAL</p>
        <h1>Our Performance their Appreciation words..!!</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((value) => {
            return (
              <SwiperSlide key={value._id} position="relative">
                <div>
                  <img src={value.image} />
                  <div className="caption">
                    <p className="captionName">{value.name}</p>
                    <p className="captionDesignation">{value.position}</p>
                    <p className="captionContent">
                      {value.message}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
