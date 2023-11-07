import React from 'react'
import Image from "../src/assets/pic5.jpg";
import Image1 from "../src/assets/pic6.jpg";
import Image2 from '../src/assets/pic4.jpg'
import { Row,Col } from 'antd';

const Blog = () => {
  return (
    <div>
        <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">Our Blog</h1>
          <p className="text-gray-200">Home / Blog</p>
        </div>
      </div>
      <div className=" text-center mt-20">
        <p className="text-lg text-gray-700 tracking-wide font-bold">
        CHECK OUT OUR
        </p>
        <h1 className="text-green-950 mt-6 text-5xl font-bold">
        Blog & Articles
        </h1>
        <p className="mt-8 text-[17px]">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p></div>
        <Row>
        <Col lg={8} xs={24} sm={24} md={12} xxl={24}>
          <div className=" m-8 p-6 bg-gray-600  rounded-lg ">
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
          <div className=" m-8 p-6 bg-gray-600 rounded-lg ">
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
          <div className=" m-8 p-6 bg-gray-600  rounded-lg ">
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
          <div className=" m-8 p-6 bg-gray-600  rounded-lg ">
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
          <div className=" m-8 p-6 bg-gray-600 rounded-lg ">
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
          <div className=" m-8 p-6 bg-gray-600 rounded-lg ">
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
            <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-3 rounded-[5px] ">
              FREE CONSULTATION
            </button>
          </div>
      </div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="mt-20 ml-10">
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
                "Curabitur accumsan felis in dui placerat lobortis. Pellentesque
                et malesuada orci, quis pretium neque. Aenean accumsan sodales
                tortor, porta tempor nunc efficitur quis. Nunc sit amet magna ac
                dui aliquet euismod nec vitae nisi."
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
              src={Image2}
              alt=""
              className="  h-[630px] rounded-lg"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Blog
