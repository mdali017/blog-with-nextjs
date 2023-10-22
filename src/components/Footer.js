import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newslatter from "./_child/newslatter";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <Newslatter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="/">
              <ImFacebook color="#888888" />
            </Link>
            <Link href="/">
              <ImTwitter color="#888888" />
            </Link>
            <Link href="/">
              <ImYoutube color="#888888" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright @2023 All Right by company name
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
