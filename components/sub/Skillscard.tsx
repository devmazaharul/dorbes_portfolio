import React from "react";
import { IoLogoFigma } from "react-icons/io5";
import { SiCssdesignawards } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaSketch } from "react-icons/fa";

export default function Skillscard({
  avatar,
  name,
  parcent,
}: {
  avatar: number;
  name: string;
  parcent: number;
}) {
  return (
    <div className="py-6 px-2 border text-center hover:border-primary rounded-md border-gray-300 duration-300 ease-in-out ">
      <p className="text-emerald-500  py-3 w-fit mx-auto">
        {avatar == 1 ? (
          <IoLogoFigma className="text-4xl " />
        ) : avatar == 2 ? (
          <SiCssdesignawards className="text-4xl " />
        ) : avatar == 3 ? (
          <SiAdobephotoshop className='text-4xl ' />
        ) : avatar == 4 ? (
          <FaWordpress  className='text-4xl '/>
        ) : avatar == 5 ? (
          <FaAngular className="text-4xl " />
        ) : avatar == 6 ? (
          <SiWebflow className='text-4xl ' />
        ) : avatar == 7 ? (
          <FaPython className='text-4xl '/>
        ) : (
          <FaSketch className='text-4xl '/>
        )}
      </p>
      <p className="py-4 font-semibold text-xl text-gray-600">{name}</p>
      <button className="primary-button py-4 w-full">{parcent}%</button>
    </div>
  );
}
