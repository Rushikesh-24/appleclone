import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div id="hero" className="w-full h-full">
        <div
          id="text"
          className="z-10 flex flex-col items-center justify-center w-screen"
        >
          <p className="text-white text-5xl font-semibold p-1 mt-10">
            iPhone 15Pro
          </p>
          <p className="text-white text-2xl font-normal p-2">
            Titanium.So Strong.So Light.So Pro
          </p>
          <div id="link" className="flex-row text-blue-500 p-3 text-xl">
          <Link href="" className="p-2 mr-2 hover:underline">Learn More &gt;</Link>
          <Link href="" className="p-2 ml-2 hover:underline">Buy &gt;</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
