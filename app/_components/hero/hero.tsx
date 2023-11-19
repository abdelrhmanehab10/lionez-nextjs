"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSwiper from "@/app/_components/hero/hero-swiper";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 8000 }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="h-screen relative overflow-y-hidden z-10"
    >
      <SwiperSlide>
        <HeroSwiper
          background="/slider/7.png"
          title=""
          titleFocus="اشترك الان"
          description="السيرفر يحتوي علي باقات عائلية وباقات مخصصة للاطفال"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiper
          background="/slider/12.png"
          title=" بجميع القنوات الرياضية"
          titleFocus="استمتع"
          description="باقة من القنوات العالميه والاجنبيه لمتابعه كافه الاحداث الرياضيه والعالميه كل واحده كده فى سطر"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiper
          background="/slider/11.png"
          title=" خاص للعائلات"
          titleFocus="محتوي"
          description="محتوي عائلي بالكامل ومفلتر ويصلح لجميع افراد العائلة علي سيرفر عرب ليونز"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiper
          background="/slider/14.png"
          title=" في بيتك 4K"
          titleFocus="السينما"
          description="شاهد الافلام بأفضل تقنيه فى العالم واعلي جودة . وصوت محيطي 5.1 وجوده لن تراها فى اي مكان أخر."
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSwiper
          background="/slider/13.png"
          title=" في عرب ليونز"
          titleFocus="مسلسلاتك عندنا"
          description="باقه من المسلسلات الترفيهيه ( العربيه والاجنبيه وكافه دول العالم ) مسلسلات بجودات مختلفه وحسب الطلب ايضا."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
