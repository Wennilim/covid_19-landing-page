import React from "react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:justify-around my-[30px] md:my-[20px] ">
      <div className="flex gap-2">
        <img
          src="/assets/logo.png"
          alt="footer"
          className="w-6 h-6 self-center"
        />
        <div className="self-center font-extrabold">COVID-19</div>
      </div>
      <p className="text-[14px]">2020 @ All rights reserved by pixelspark.com</p>
      <div className="flex gap-6">
        <RiFacebookCircleFill className="w-8 h-8" />
        <RiInstagramFill className="w-8 h-8" />
        <AiFillYoutube className="w-8 h-8" color="red" />
        <RiTwitterFill className="w-8 h-8" />
      </div>
    </div>
  );
};

export { Footer };
