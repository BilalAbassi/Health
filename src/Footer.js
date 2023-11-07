import { Col, Row } from "antd";
import React from "react";
import Image from "../src/assets/logo.webp";
import { Link } from "react-router-dom";
import {
  WhatsAppOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div>
      <Row className=" bg-gray-600 mt-6">
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className="  p-4 m-4 text-white">
            <img src={Image} alt="" className=" w-20" />
            <p className=" text-[16px] mt-6">
              Mauris vitae eros placerat velit molestie mollis. Aenean euismod
              eros arcu, ut dapibus urna vestibulum facilisis. Duis et facilisis
              augue, ac malesuada tortor.
            </p>
            <WhatsAppOutlined className=" text-2xl mt-6 cursor-pointer" />
            <LinkedinOutlined className=" text-2xl mt-6 pl-6 cursor-pointer" />
            <YoutubeOutlined className=" text-2xl mt-6 pl-6 cursor-pointer" />
            <InstagramOutlined className=" text-2xl mt-6 pl-6 cursor-pointer" />
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className=" p-4 m-4">
            <p className=" text-white text-[20px] font-semibold">Quick Links</p>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-14"
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
              <Link to="/" className=" text-white mt-14 ml-3 text-[16px] cursor-pointer">
                Home
              </Link>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <Link to="/aboutus" className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                About Us
              </Link>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <Link to="/services" className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                Services
              </Link>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <Link to="/appointment" className=" text-white ml-3 mt-2  text-[16px] cursor-pointer">
                Appointment
              </Link>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <Link to="/blog" className=" text-white ml-3 mt-2  text-[16px] cursor-pointer">
                Blog
              </Link>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <Link to="/contact" className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                Contact Us
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className="p-4 m-4">
            <p className=" text-white text-[20px] font-semibold">Services</p>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-14"
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
              <p className=" text-white mt-14 ml-3 text-[16px] cursor-pointer">
                Chiropractic Care
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <p className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                Acupunctur
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <p className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                Massage Therapy
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <p className=" text-white ml-3 mt-2  text-[16px] cursor-pointer">
                Sports Chiropractic
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <p className=" text-white ml-3 mt-2  text-[16px] cursor-pointer">
                Laser Therapy
              </p>
            </div>
            <div className=" flex justify-normal">
              <svg
                className=" w-5 text-white mt-2 "
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
              <p className=" text-white ml-3 mt-2 text-[16px] cursor-pointer">
                Pediatric Chiropractic
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
          <div className="p-4 m-4 ">
            <p className=" text-white text-[20px] font-semibold">Information</p>
          </div>
          <div class="flex items-center">
            <div class="mr-4 ml-4">
              <svg
                className="w-10 text-white mt-6"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
            </div>
            <p class="text-lg text-white  mr-6 mt-6">
              Call Us
              <p>+123-234-1234</p>
            </p>
          </div>
          <div class="flex items-center">
            <div class="mr-4 ml-4">
              <svg
                className=" w-10 text-white mt-6"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
            </div>
            <p class="text-lg text-white mr-6 mt-6">
              Email
              <br />
              <p>hello@awesome.com</p>
            </p>
          </div>
          <div class="flex items-center">
            <div class="mr-4 ml-4">
              <svg
                className=" w-10 text-white mt-6"
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                ></path>
              </svg>
            </div>
            <p class="text-lg text-white mr-6 mt-6">
              Address
              <br />
              <p>99 Roving St., Big City, PKU</p>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
