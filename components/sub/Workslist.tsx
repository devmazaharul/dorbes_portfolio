"use client";
import Image from "next/image";

import React, { useState } from "react";

export default function Workslist() {
  const [active, setactive] = useState(0);

  const workarr = {
    catagoryArr: ["Show all", "Brading", "Design", "Marketing", "Game"],
    catagoryByproduct: [
      {
        index: 0,
        data: [
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 0,
          },
        ],
      },
      {
        index: 1,
        data: [
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 0,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
        ],
      },
      {
        index: 2,
        data: [
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 0,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
        ],
      },
      {
        index: 3,
        data: [
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 0,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
        ],
      },
      {
        index: 4,
        data: [
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 0,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
          {
            src: "/blog1.jpg",
            title: "Branding",
            name: "Website Makeup Design",
            catagory: 1,
          },
        ],
      },
    ],
  };

  const handleClick = (index: number) => {
    setactive(index);
  };

  return (
    <div>
      <div className="flex items-center gap-4 my-8  w-fit mx-auto">
        {workarr.catagoryArr.map((btn, i) => {
          return (
            <button
              onClick={() => handleClick(i)}
              className={`${active == i ? "text-primary" : ""} text-gray-600`}
              key={Math.random()}
            >
              {btn}
            </button>
          );
        })}
      </div>
      {/* show product */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {workarr.catagoryByproduct.map((item) => {
          if (item.index == active) {
            return item.data.map((list) => (
              <div
                key={Math.random()}
                className="border rounded-lg mb-2 cursor-pointer hover:scale-95 duration-300 ease-in-out"
              >
                <Image
                  src={list.src}
                  className="rounded-t-lg pb-2"
                  width={400}
                  height={400}
                  alt="product"
                />
                <div className="px-2">
                  <p className="text-gray-700 font-semibold py-1">
                    {list.title}
                  </p>
                  <p className="text-gray-500 pb-4">{list.name}</p>
                </div>
              </div>
            ));
          }
        })}
      </div>
    </div>
  );
}
