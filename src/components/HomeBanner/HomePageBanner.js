import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

function HomePageBanner() {
  SwiperCore.use([Autoplay]);
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
            <SwiperSlide>
              <div className="lg:flex md:flex block  justify-center">
                <div className="flex "></div>

                <div>
                  <img
                    src="/div.ecommerce-home.png"
                    alt="banner"
                    className="h-[200px] sm:h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
