"use client";
import { testimonialData } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function Testinomials() {
  const [index, setindex] = useState(0);

  const handleInc = () => {
    if (index !== testimonialData.length - 1) {
      setindex((pre) => pre + 1);
    }
  };
  const handleDec = () => {
    if (index !== 0) {
      setindex((pre) => pre - 1);
    }
  };

  return (
    <div className="card">
      <div className="text-center ">
        <p className="text-xl text-gray-600">Testinomials</p>
        <h1 className="text-3xl font-semibold text-gray-800">
          What clients say!
        </h1>
      </div>

      {/* userFeedback */}

      <div className=" my-6 ">
        <div className="rounded-lg md:w-[50%] overflow-hidden mx-auto p-6 cursor-pointer  border-gray-200">
          <Image
            src={testimonialData[index].avatar}
            width={400}
            height={400}
            alt="testimonial_image"
            className="w-[90px] mb-4 h-[90px] p-1 rounded-full border border-dashed border-primary"
          />
          <p className="text-gray-600 capitalize leading-8">
            {testimonialData[index].desc}
          </p>
          <div className="py-6">
            <h1 className="text-2xl font-semibold capitalize text-gray-800 py-2">
              {testimonialData[index].name}
            </h1>
            <p className="text-gray-600 capitalize">{testimonialData[index].title}</p>
          </div>
        </div>
      </div>

      <div className="w-fit  mx-auto">
        <div className="flex items-center gap-4">
          <button disabled={index == 0 ? true : false} onClick={handleDec}>
            <FaArrowLeft className={`${index==0?'bg-none cursor-not-allowed text-gray-400':'text-primary hover:bg-primary  hover:text-white'}  text-4xl border   rounded-full p-2 `} />
          </button>
          <button
            disabled={index == testimonialData.length - 1 ? true : false}
            onClick={handleInc}
          >
            <FaLongArrowAltRight  className={`${index==testimonialData.length-1?'bg-none cursor-not-allowed text-gray-400':'text-primary hover:bg-primary  hover:text-white'}  text-4xl border   rounded-full p-2 `} />
          </button>
        </div>
      </div>
    </div>
  );
}
