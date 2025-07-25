import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import card_img from "../../assets/card_img1.png";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Ternds() {
  const data = [
    { id: 1, img: card_img },
    { id: 2, img: card_img },
    { id: 3, img: card_img },
    { id: 4, img: card_img },
    { id: 5, img: card_img },
    { id: 6, img: card_img },
    { id: 7, img: card_img },
    { id: 8, img: card_img },
  ];

  return (
    <section className="py-10">
      <div className="w-[90%] max-w-[1400px] m-auto flex flex-col gap-8 md:gap-[60px] mt-6 md:mt-[40px]">
        <div className="flex flex-row md:flex-row items-start md:items-center justify-between gap-4">
          <h3 className="text-white text-3xl md:text-[48px] font-bold">Trends</h3>
          <Link 
            className="text-lg md:text-[29px] font-medium text-[#1677ff] flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity" 
            to="/"
          >
            See More
            <ArrowRight size={20} md:size={24} color="#1677ff" />
          </Link>
        </div>
        
        <div className="relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
            pagination={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.map((value) => (
              <SwiperSlide key={value?.id}>
                <div className="relative w-full max-w-[230px] overflow-hidden rounded-xl md:rounded-[16px] transition-transform hover:scale-105">
                  <div className="absolute top-2 left-2 z-10 card_plus text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center">
                    +
                  </div>
                  <img
                    src={value?.img}
                    alt="Trending content"
                    className="w-full h-auto object-cover aspect-[2/3]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Ternds;