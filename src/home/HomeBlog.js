import { Row, Col } from "antd";
import React from "react";
import Image from "../assets/pic5.jpg";
import Image1 from "../assets/pic6.jpg";

const HomeBlog = () => {
  return (
    <div>
      <Row>
        <Col lg={8} xs={24} sm={24} md={12} xxl={24}>
          <div className=" m-6 p-6 bg-gray-600  rounded-lg ">
            <img src={Image} alt="" className=" rounded-lg" />
            <div className=" flex justify-normal m-4">
              <svg
                className=" w-6 text-white"
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                ></path>
              </svg>
              <p className=" text-white text-[16px] ml-2"> October 7, 2022</p>
              <svg
                className=" w-6 text-white ml-6"
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
              <p className=" ml-4 text-white text-[18px]">0</p>
            </div>
            <p className=" text-white text-[18px] font-semibold">
              Neck Pain and Treatment with
              <br />
              Chiropractic
            </p>
            <p className=" text-white text-[16px] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum ultrices nisi, at congue sapien lobortis…
            </p>
            <div className=" flex justify-normal mt-6">
              <p className=" text-white font-bold">READ MORE</p>
              <svg
                className="w-5 ml-2 text-white  font-bold"
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </div>
          </div>
        </Col>
        <Col lg={8} xs={24} sm={24} md={12} xxl={24}>
          <div className=" m-6 p-6 bg-gray-600 rounded-lg ">
            <img src={Image1} alt="" className=" rounded-lg" />
            <div className=" flex justify-normal m-4">
              <svg
                className=" w-6 text-white"
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                ></path>
              </svg>
              <p className=" text-white text-[16px] ml-2"> October 7, 2022</p>
              <svg
                className=" w-6 text-white ml-6"
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
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
              <p className=" ml-4 text-white text-[18px]">0</p>
            </div>
            <p className=" text-white text-[18px] font-semibold">
              What Your Back Pain is Trying
              <br /> to Tell You
            </p>
            <p className=" text-white text-[16px] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              rutrum ultrices nisi, at congue sapien lobortis…
            </p>
            <div className=" flex justify-normal mt-6">
              <p className=" text-white font-bold">READ MORE</p>
              <svg
                className="w-5 ml-2 text-white  font-bold"
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </div>
          </div>
        </Col>
        <Col lg={8} xs={24} sm={24} md={12} xxl={24}>
          <div className="m-6 ">
            <p className="text-lg text-gray-700 tracking-wide font-bold">
              CHECK OUT OUR
            </p>
            <h1 className=" text-green-950 mt-6 text-5xl font-bold">
              Blog & Articles
            </h1>
            <p className="mt-8 text-[16px]">
              Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non
              diam elementum ultricies. In hac habitasse platea dictumst nullam
              eu elit ligula volutpat.
            </p>
            <p className="mt-2 text-[16px]">
              Ut malesuada lectus non ante eleifend, ac lacus nunc viverra.
              Etiam ornare neque augue.
            </p>
          </div>

          <div className="flex justify-normal ml-8 mt-10 ">
            <button className="text-white font-bold text-[16px] bg-gray-500  py-5 px-5 rounded-[5px] ">
             VIEW ALL
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBlog;
