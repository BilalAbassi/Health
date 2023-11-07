import React from "react";
import Image from "../src/assets/pic5.jpg";
import { Col, Row } from "antd";
import Image1 from "./assets/pic9.jpg";
import Image2 from "../src/assets/pic10.jpg";
import Image3 from "../src/assets/pic4.jpg";
import Image4 from "../src/assets/download.jpg";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const ServiceDetail = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">About Tudebon</h1>
          <p className="text-gray-200">Home / Service Detail</p>
        </div>
      </div>
      <Row>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <div className=" mt-20">
            <img src={Image1} alt="" className=" ml-4 rounded-2xl" />
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className="bg-green-950 py-3 px-3  h-[160px] mt-20 ml-14 rounded-2xl ">
            <p className="ml-[30px] text-white font-bold text-[50px] flex justify-center">
              <span>$25</span>
              <span className=" text-white text-[16px] mt-10">/ Service</span>
            </p>
          </div>
          <div
            class=" p-4 border border-solid border-black m-6 ml-14 rounded-xl
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
              <div className="flex justify-normal mt-10 ">
                <button className="text-white font-semibold text-[16px] bg-gray-500  py-3 px-3  rounded-[5px] ">
                  MAKE APPOINMENT
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={16} xs={24} sm={24} md={12} xxl={24}>
          <div className=" ml-10 mt-7">
            <p className=" text-5xl font-bold text-green-950">
              Chiropractic Care
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
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div
            className=" relative ml-14 mt-10
            "
          >
            <img
              src={Image4}
              alt=""
              className="  h-[270px] rounded-xl"
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

      <Row>
        <Col lg={10} xs={24} sm={24} md={12} xxl={24}>
          <div className=" ml-8 mt-7">
            <img src={Image2} alt="" className=" rounded-xl" />
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className=" p-4 m-4">
            <p className=" text-[20px] font-semibold">The Treatment You Get</p>
            <div className=" flex justify-normal">
              <p className=" mt-6 text-[16px] ">
                Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est
                suspendisse.
              </p>
            </div>
            <div className=" flex justify-normal mt-8">
              <svg
                className=" w-5 mt-2 "
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
              <p className=" ml-3 mt-2 text-[16px] cursor-pointer">
                Aenean euismod eros
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 mt-2 "
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
              <p className="ml-3 mt-2 text-[16px] cursor-pointer">
                Duis vestibulum magna quis
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 mt-2 "
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
              <p className="ml-3 mt-2  text-[16px] cursor-pointer">
                Quisque congue gravida
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 mt-2 "
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
              <p className=" ml-3 mt-2  text-[16px] cursor-pointer">
                In hac habitasse
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5  mt-2 "
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
              <p className=" ml-3 mt-2 text-[16px] cursor-pointer">
                Maecenas dictum fringilla
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 mt-2 "
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
              <p className="ml-3 mt-2 text-[16px] cursor-pointer">
                Duis vestibulum magna quis
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 mt-2 "
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
              <p className="ml-3 mt-2 text-[16px] cursor-pointer">
                Duis vestibulum magna quis
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className=" bg-gray-700 mt-10 ml-14 text-white  rounded-xl">
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
          <p className=" p-6 ml-4 text-[16px]">
            Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est.
            Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
            Nunc pretium placerat condimentum. Praesent sed turpis ut sem
            bibendum euismod ut in lacus. Quisque congue gravida interdum.
            Quisque vitae placerat lorem. Praesent sapien nibh, pellentesque
            vitae tincidunt eu, tempus at nibh.
          </p>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className=" bg-gray-700  ml-14 text-white  rounded-xl h-[200px]">
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

      <div className=" ml-10">
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
        </Row>

        <Row>
          <Col lg={12} xs={24} sm={24} md={12}>
            <div className="mt-20 ">
              <p className="text-green-950 mt-6 text-5xl font-bold">
                Our Patient Review
              </p>
              <p className="mt-8 text-[16px]">
                Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est.
                Suspendisse
                <br />
                potenti. Duis vestibulum magna quis suscipit tempus.
              </p>
              <div class="bg-green-950 p-16 rounded-xl">
                <svg
                  className=" w-20 text-white"
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
                    d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  ></path>
                </svg>
                <p
                  className="text-white text-[20px] font-serif m-3 "
                  style={{ fontStyle: "italic" }}
                >
                  "Curabitur accumsan felis in dui placerat lobortis.
                  Pellentesque et malesuada orci, quis pretium neque. Aenean
                  accumsan sodales tortor, porta tempor nunc efficitur quis.
                  Nunc sit amet magna ac dui aliquet euismod nec vitae nisi."
                </p>
                <p className="text-white text-[20px] font-serif m-3 ">
                  Michael Granger
                </p>
                <p className=" text-white text-[16px] ml-3">Football Player</p>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24} sm={24} md={12}>
            <div className=" mt-28">
              <img
                src={Image3}
                alt=""
                className=" w-[600px] h-[580px] rounded-lg"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceDetail;
