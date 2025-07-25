import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // asosiy stil
import "swiper/css/pagination"; // agar pagination kerak bo‘lsa
import "swiper/css/navigation"; // agar tugmalar kerak bo‘lsa
import card_img from "../../assets/card_img1.png";

// kerakli modullarni import qilamiz
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function Ternds() {
  const data = [
    {
      id: 1,
      img: card_img,
    },
    {
      id: 2,
      img: card_img,
    },
    {
      id: 3,
      img: card_img,
    },
    {
      id: 4,
      img: card_img,
    },
    {
      id: 5,
      img: card_img,
    },
    {
      id: 6,
      img: card_img,
    },
    {
      id: 7,
      img: card_img,
    },
    {
      id: 8,
      img: card_img,
    },
  ];

  return (
    <section>
      <div className="w-[90%] m-auto flex flex-col gap-[60px] mt-[40px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[#FFF] text-[48px] font-bold">Trends</h3>
          <Link className="text-[29px] font-medium text-blue-600" to={"/"}>
            See More
          </Link>
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            // centeredSlides={true}
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
                <div className="relative w-[230px] overflow-hidden rounded-[16px]">
                  <div className="absolute top-2 left-2 z-10 card_plus">+</div>
                  <img
                    src={value?.img}
                    alt="This is image"
                    className="w-full h-auto object-cover"
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
