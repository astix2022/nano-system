import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card, Des } from './style'
import NoImg2 from '../../../assets/imgs/No img2.png'
import { Pagination, Navigation } from "swiper";
import Reveal from 'react-reveal/Reveal';

export default function Yutuqlar() {
  return (
    <Reveal>

    <Container>
      <h1 className="sub-title">Maktabdagi </h1>
      <Swiper
        slidesPerView={4}
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
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <img className="noImg" src={NoImg2} alt="#" />
            <Des>
              <p className="des-text">Maktabda bo’sh o’rinlar qolmadi!</p>
              <span className="des-date">18:56</span>
            </Des>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
    </Reveal>
  );
}