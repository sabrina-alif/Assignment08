import React from 'react';
import hero from "../../assets/hero.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gray-50 pt-16 pb-24">

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-black text-4xl lg:text-5xl font-bold leading-tight">
          We Build <br />
          <span className="text-violet-600">Productive</span> Apps
        </h1>

        <p className="mt-4 text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="btn bg-white shadow text-black rounded-full">
            <FaGooglePlay />
            Google Play
          </button>

          <button className="btn bg-white shadow text-black rounded-full">
            <FaApple />
            App Store
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <img
          src={hero}
          alt="hero phone"
          className="w-72 md:w-96 lg:w-[430px] drop-shadow-2xl"
        />
      </div>

      <div className="bg-violet-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold">29.6M</h3>
            <p>Total Downloads</p>
            <p className="text-sm mt-1 opacity-80">21% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">906K</h3>
            <p>Total Reviews</p>
            <p className="text-sm mt-1 opacity-80">46% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">132+</h3>
            <p>Active Apps</p>
            <p className="text-sm mt-1 opacity-80">31 More Will Launch</p>
          </div>

        </div>
      </div>

    </div>
  );
};



export default Banner;