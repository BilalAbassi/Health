import React from "react";
import Image from "../src/assets/pic5.jpg";
import Image1 from "../src/assets/pic12.jpg";
import Image4 from "../src/assets/download.jpg";
import { Row, Col } from "antd";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const BlogSinglePost = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">Single Post</h1>
          <p className="text-gray-200 mt-4">Home / Single Post</p>
        </div>
      </div>
      <Row>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <div className=" mt-20">
            <img src={Image1} alt="" className=" ml-6 rounded-2xl" />
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div class="p-4 mt-20 ml-11">
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-2 flex items-center">
                <svg
                  className=" w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                id="search"
                name="search"
                class=" border border-solid border-black rounded  w-full py-2 px-3 text-gray-700 text-[16px]"
              />
            </div>
          </div>
          <div className=" bg-gray-700 mt-5 ml-14 text-white  rounded-xl">
            <p className=" text-white text-2xl p-10">Other Service</p>
            <hr className=" m-6 mt-1 font-extrabold" />
            <div className=" flex justify-normal p-6 ">
              <svg
                className=" w-5  "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3 text-[16px] font-semibold">Acupunctur</p>
            </div>
            <div className=" flex justify-normal p-6 -mt-10 ">
              <svg
                className=" w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">Massege Therapy</p>
            </div>
            <div className=" flex justify-normal p-6 -mt-10">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Sports Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal p-6 -mt-10">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">Laser Therapy</p>
            </div>
            <div className=" flex justify-normal p-6 -mt-10">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <div className=" ml-10 mt-7">
            <p className=" text-5xl font-bold text-green-950">
              Chiropractic Tips for
              <br /> Improving Your Posture
            </p>
            <div className=" flex ">
              <div className=" flex">
                <svg
                  className=" w-5 mt-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  ></path>
                </svg>
                <p className=" mt-5 ml-2">Service</p>
              </div>
              <div className=" flex ml-6">
                <svg
                  className=" w-5 mt-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  ></path>
                </svg>
                <p className=" mt-5 ml-2">Chiropractic care</p>
              </div>
            </div>
            <p className=" mt-4 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum ultrices nisi, at congue sapien lobortis vel. Sed maximus
              tincidunt mi et luctus. Phasellus gravida elit nec lectus commodo,
              et pretium tortor fermentum. Quisque massa justo, posuere a semper
              sed, vestibulum non nibh. Nulla fringilla semper mi sed pulvinar.
              Curabitur accumsan felis in dui placerat lobortis. Pellentesque et
              malesuada orci, quis pretium neque. Aenean accumsan sodales
              tortor, porta tempor nunc efficitur quis. Nunc sit amet magna ac
              dui aliquet euismod nec vitae nisi. Donec vel ligula enim. Vivamus
              sed risus semper, fringilla massa at, rhoncus quam. Vestibulum nec
              ante suscipit, commodo nisi ac, dapibus nunc. Donec sit amet est
              pharetra, laoreet nisl nec, volutpat nunc.
            </p>
            <p className=" mt-4 text-[16px]">
              Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est.
              Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
              Nunc pretium placerat condimentum. Praesent sed turpis ut sem
              bibendum euismod ut in lacus. Quisque congue gravida interdum.
              Quisque vitae placerat lorem. Praesent sapien nibh, pellentesque
              vitae tincidunt eu.
            </p>
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div
            class="  border border-solid border-black m-6 ml-14 rounded-xl
            "
          >
            <div className="p-7">
              <input
                class=" border border-solid border-black rounded w-full py-2 px-3 text-gray-700 text-[16px] "
                id="Name"
                type="text"
                placeholder="Name"
              />
              <input
                class=" border border-solid border-black rounded mt-4 w-full py-2 px-3 text-gray-700 text-[16px] "
                id="Phonenumber"
                type="text"
                placeholder="Phone"
              />
              <div class="mb-4">
                <select
                  id="dropdown"
                  name="dropdown"
                  class=" border border-solid border-black rounded mt-4 w-full py-2 px-3 text-gray-700 text-[16px] "
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div class="mb-4 ">
                <input
                  type="date"
                  id="date"
                  name="date"
                  class=" border border-solid border-black rounded  w-full py-2 px-3 text-gray-700 text-[16px]"
                />
              </div>
              <div className="flex mt-10 ">
                <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-3  rounded-[5px] ">
                  MAKE APPOINMENT
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* <div className=" ml-10">
        <p className=" text-3xl font-semibold">Chiropractic Benefits</p>
        <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" flex justify-normal mt-4">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
          </Col>

          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" flex justify-normal mt-4">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" flex justify-normal mt-4">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal mt-2">
              <svg
                className=" w-5 "
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-3  text-[16px] font-semibold">
                Pediatric Chiropractic
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div
              className=" relative mr-16
            "
            >
              <img
                src={Image4}
                alt=""
                className=" w-[100%] h-[270px] rounded-xl"
              />
              <div className="absolute -mt-52 px-4 py-3  ">
                <h1 className=" text-white text-3xl">
                  Feel Something Wrong With Your Bones?
                </h1>
                <div className="flex justify-normal ml-8 mt-10 ">
                  <button className="text-white font-semibold text-[16px] bg-gray-500  py-3 px-3 -mt-6  rounded-[5px] ">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}
      <Row>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <p className=" p-6 ml-4 text-[16px]">
            Mauris vitae eros placerat velit molestie mollis. Aenean euismod
            eros arcu, ut dapibus urna vestibulum facilisis. Duis et facilisis
            augue, ac malesuada tortor. Duis vitae mattis nulla. Cras accumsan,
            neque eget eleifend vestibulum, tortor leo venenatis sem, a vehicula
            tortor eros sed turpis. Integer urna magna, vehicula at efficitur
            gravida, luctus nec nisl. In vestibulum, nisi et commodo tempor,
            ipsum erat malesuada orci, in pulvinar neque justo eget ligula. Ut
            malesuada lectus non ante eleifend, ac consectetur lacus viverra.
            Etiam ornare neque augue, ut egestas nunc congue a. Sed aliquam,
            metus et scelerisque facilisis, purus sem ornare dui, nec volutpat
            tortor libero id tortor. Maecenas quis mauris vel nisl porttitor
            commodo. Nullam eu augue volutpat, commodo nulla vitae, elementum
            metus.
          </p>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className=" bg-gray-700  ml-14 text-white p-6  rounded-xl  mt-6">
            <p className=" text-white text-2xl p-10">Follow Us On</p>
            <hr className=" m-6 mt-1 font-extrabold" />
            <div className=" ml-9">
              <WhatsAppOutlined className=" text-2xl cursor-pointer" />
              <FacebookOutlined className=" text-2xl ml-6 cursor-pointer" />
              <YoutubeOutlined className=" text-2xl ml-6 cursor-pointer" />
              <LinkedinOutlined className=" text-2xl ml-6 cursor-pointer" />
            </div>
          </div>
        </Col>
      </Row>

      <div className=" mt-24 bg-gray-200 p-16">
        <p className="text-green-950 mt-6 text-5xl font-bold flex justify-center">
          Feel Something Wrong With Your Bones?
        </p>
        <p className=" flex justify-center mt-5">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p>
        <div className="flex justify-center ml-8 mt-10 ">
          <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-3 w-[250px] rounded-[5px] ">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePost;
