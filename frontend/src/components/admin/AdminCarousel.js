import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";
import "../../styles/HomeCarousel.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Button, useToast } from "@chakra-ui/react";

export default function AdminCarousel() {
    const [testimonials, setTesmonials] = useState([]);

    const toast = useToast();

    useEffect(() => {
        Axios.get("http://localhost:5000/gettestimonials").then((response) => {
            // console.log(response.data);
            setTesmonials(response.data);
        });
    }, [testimonials]);

    const Delete = (id) => {
        try {
            Axios.delete("http://localhost:5000/testimonial/delete/" + id).then((res) => {
                setTesmonials(testimonials.filter((val) => {
                    console.log(val);
                    return val._id !== id;
                }))
                toast({
                    title: "Blog deleted",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
            });
        } catch (error) {
            toast({
                title: "Error occured",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // console.log(error);
        }
    }

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
                                        <p className="captionContent">{value.message}</p>
                                    </div>
                                </div>
                                <Button position="" top="0" onClick={() => Delete(value._id)}>delete</Button>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
