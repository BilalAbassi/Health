import React from "react";
import Image from "../src/assets/download (1).jpg";

const Error = () => {
  return (
    <div>
      <div class="relative">
        <img
          src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg"
          className=" w-full  h-[500px]"
        />
        <h1 class="absolute text-6xl text-[170px] font-bold text-white top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
          404
        </h1>
        <h2 class="absolute text-6xl text-[60px] font-bold text-white top-60 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Page Not Found!
        </h2>
        <h3 class="absolute text-xl font-bold text-white top-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
          ERROR
        </h3>
        <h3 class="absolute text-[16px]  text-white top-80 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam diam
          ultricies. In hac platea dictumst. Nullam eu sed metus convallis. Cras
          iaculis eros. Phasellus at lectus viverra.
        </h3>

        <div class="absolute -mt-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button className="text-white font-bold text-[16px] bg-gray-500  py-4 px-4  rounded-[5px] ">
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
