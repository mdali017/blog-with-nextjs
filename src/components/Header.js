import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const header = () => {
  const user = true;
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a className="text-2xl font-bold">Design</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
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
          {user ? (
            <>
              <button className="border mx-3 px-2 py-1">Sign Out</button>
            </>
          ) : (
            <>
              <button className="border mx-3 px-2 py-1">Register</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default header;
