import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";

const Section4 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-xl font-bold py-12 ">Business</h1>
          <div className="flex flex-col gap-6">
            {/* post */}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="text-xl font-bold py-12 ">Travel</h1>
          <div className="flex flex-col gap-6">
            {/* post */}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
};

const Post = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={
              "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            className="rounded"
            width={300}
            height={250}
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="cat">
          <Link className="text-orange-600 hover:text-red-600" href={"/"}>
            Business, Travel
          </Link>
          <Link className="text-black hover:text-red-600 text-sm" href={"/"}>
            -July 12, 2023
          </Link>
        </div>
        <div className="title">
          <Link className="font-bold" href={"/"}>
            Please provide some details or keywords related to your blog, and
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
};

export default Section4;
