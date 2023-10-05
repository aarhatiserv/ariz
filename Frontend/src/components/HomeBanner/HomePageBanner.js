import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import axios from "axios";

function HomePageBanner() {
  SwiperCore.use([Autoplay]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ariz.onrender.com/api/banner/banner`)
      .then((res) => {
        console.log(res.data);

        setBanners(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className=" ">
        <div className=" py-0">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            autoplay={true}
            loop={true}
            className="mySwiper"
          >
            {" "}
            {banners.map((banner, index) => (
              <SwiperSlide>
                <div className="lg:flex md:flex block  justify-center">
                  <div className="flex "></div>

                  <div>
                    <img
                      src={banner.imageUrl}
                      alt="banner"
                      className=" h-[200px] object-fit sm:h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="lg:flex md:flex block justify-center">
                <div className="flex "></div>

                <div>
                  <img
                    src="/div.ecommerce-home.png"
                    alt="banner"
                    className="h-[200px] sm:h-full"
                  />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
