import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = () => {
  return (
    <div className="author flex py-5">
      <Image
        className="rounded-full"
        src={
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className=" font-bold text-gray-800 hover:text-gray-600"
        >
          Adam Das
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
};

export default Author;
