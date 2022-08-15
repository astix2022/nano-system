import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card, Des } from './style'
import NoImg from '../../../assets/imgs/No img.png'
import Reveal from 'react-reveal/Reveal';



import { Pagination, Navigation } from "swiper";

export default function Ozgarishlar() {
  return (
    <Reveal>
    <Container>
      <h1 className="sub-title">Maktabdagi </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg} alt="#" />
            <Des>
              <p className="des-text">Maktabimizda o’qish tugadi endi imtihon
                jarayoniga tayyorgarlik boshlanadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
        </Reveal>
  );
}

