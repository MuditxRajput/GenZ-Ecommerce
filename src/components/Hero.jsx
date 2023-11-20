import React from 'react';
import Hero_image from '../Hero_Image.png';
const Hero = ({name}) => {
  return (
    <div className=" text-black p-4 flex items-center justify-center">
      {/* Text Content */}
      <div className="text-center mx-auto ">
        <h1 className="text-4xl font-bold mb-4">{name.name}</h1>
        <p className="text-lg mb-6">
          Your hero section description goes here. It can span multiple lines.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Buy now</button>
      </div>

      {/* Image */}
      <div className="mx-auto ">
        <img
          src={Hero_image}
          alt="Hero Image"
          className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto rounded-md"
        />
         {/* <Hero_image/> */}
      </div>
    </div>
  );
};



export default Hero