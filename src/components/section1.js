"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Section1 = () => {
  const bg = {
    background: "url('../assets/images/background.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-2xl pb-12 text-center">Trending</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            // delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
        {/* {Slide()} */}
      </div>
    </section>
  );
};

const Slide = () => {
  return (
    <div className="grid grid-cols-2 gap-8 items-center">
      <div className="images ">
        <Link href={"/"}>
          {/* <a> */}
          <Image
            src={
              "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={600}
            height={400}
          />
          {/* </a> */}
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link className="text-orange-600 hover:text-red-600" href={"/"}>
            Business, Travel
          </Link>
          <Link className="text-black hover:text-red-600 text-sm" href={"/"}>
            -July 12, 2023
          </Link>
        </div>
        <div className="title">
          <Link className="text-2xl md:text-3xl font-bold" href={"/"}>
            Please provide some details or keywords related to your blog, and
            I'll be happy to generate a title for you
          </Link>
          <p className="text-sm mt-3 text-gray-500">
            Health is a state of complete physical, mental, and social
            well-being, where one is free from illness, injury, or discomfort.
            It encompasses not only the absence of disease but also the ability
            to lead a fulfilling and active life, allowing individuals to reach
            their full potential and enjoy a balanced and vibrant existence.
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
};

export default Section1;
