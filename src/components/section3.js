"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Author from "./_child/author";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="text-3xl font-bold py-12 text-center">Most Popular</h1>
      {/* Swiper */}
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

const Post = () => {
  return (
    <div className="item grid">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={
              "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link className="text-orange-600 hover:text-red-600" href={"/"}>
            Business, Travel
          </Link>
          <Link className="text-black hover:text-red-600 text-sm" href={"/"}>
            -July 12, 2023
          </Link>
        </div>
        <div className="title">
          <Link className="text-xl md:text-xl font-bold" href={"/"}>
            Please provide some details or keywords related to your blog, and
          </Link>
        </div>
        <p className="text-sm mt-3 text-gray-500">
          Health is a state of complete physical, mental, and social well-being,
          where one is free from illness, injury, or discomfort. It encompasses
          not only the absence of disease but also the ability to lead a
          fulfilling and active life, allowing individuals to reach their full
          potential and enjoy a balanced and vibrant existence.
        </p>
        <Author />
      </div>
    </div>
  );
};

export default Section3;
