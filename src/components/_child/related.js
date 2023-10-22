import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./author";

const Related = () => {
  return (
    <section className="pt-20">
      <h1 className="text-xl font-bold py-12 ">Related</h1>
      <div className="flex flex-col gap10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

const Post = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex  justify-start my-3 gap-6">
        <Image
          src={
            "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
          width={250}
          height={200}
        />
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
    </div>
  );
};

export default Related;
