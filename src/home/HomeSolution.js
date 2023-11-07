import { Row, Col } from "antd";
import React from "react";
import Image from "../assets/pic3.jpg";


const HomeSolution = ({ percent }) => {
  const progressPercent = 50;
  return (
    <div>
      <div className="flex justify-center p-8 bg-gray-200">
        <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" p-4 ">
              <div className=" flex justify-center">
                <svg
                  className=" w-20"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[40px] font-bold">
                1,200+
              </p>
              <p className=" flex justify-center text-[18px] font-bold">
                Happy Patients
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" p-4">
              <div className=" flex justify-center">
                <svg
                  className=" w-20"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[40px] font-bold">250+</p>
              <p className=" flex justify-center text-[18px] font-bold">
                Therapist & Staff
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" p-4">
              <div className=" flex justify-center">
                <svg
                  className=" w-20"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[40px] font-bold">
                1,200+
              </p>
              <p className=" flex justify-center text-[18px] font-bold">
                Happy Patients
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className="p-4">
              <div className=" flex justify-center">
                <svg
                  className=" w-20"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[40px] font-bold">75+</p>
              <p className=" flex justify-center text-[18px] font-bold">
                Branch Clinic
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-white rounded-lg p-4 m-8 shadow-lg">
        <Row>
          <Col lg={12} xs={24} sm={24} md={12}>
            <div className=" p-6 ">
              <img src={Image} alt="" className="rounded-lg" />
            </div>

            <div className=" flex justify-between">
              <p className=" ml-4 text-[20px]">Experience</p>
              <p className="mr-6 text-[16px]">97%</p>
            </div>
            <div
              className="bg-green-950 h-4 ml-4 mt-2 rounded-[5px]"
              style={{ width: `${95}%` }}
            ></div>

            <div className=" flex justify-between mt-5">
              <p className=" ml-4 text-[20px]">Chiropractic</p>
              <p className=" mr-6 text-[16px]">95%</p>
            </div>
            <div
              className="bg-green-950 h-4 ml-4 mt-2 rounded-[5px]"
              style={{ width: `${95}%` }}
            ></div>

            <div className=" flex justify-between mt-5">
              <p className=" ml-4 text-[20px]">Therapist</p>
              <p className="mr-6 text-[16px]">93%</p>
            </div>
            <div
              className="bg-green-950 h-4 ml-4 mt-2 rounded-[5px]"
              style={{ width: `${95}%` }}
            ></div>
          </Col>
          <Col lg={12} xs={24} sm={24} md={12}>
            <p className="text-lg text-gray-700 tracking-wide font-bold m-6">
              WHY CHOOSE US
            </p>
            <p className=" text-green-950 mt-6 text-5xl font-bold">
              Many Solution
              <br />
              Under One Roof
            </p>
            <p className="mt-8 text-[16px] text-gray-700">
              Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non
              diam
              <br />
              elementum ultricies. In hac habitasse platea dictumst. Nullam eu
              elit sed
              <br />
              metus convallis lobortis a iaculis eros. Ut malesuada lectus non
              ante
              <br />
              eleifend, ac consectetur lacus viverra.
            </p>
            <div className=" flex justify-normal">
              <div>
                <svg
                  className=" w-6 mt-3"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
              <p className=" m-3  text-[18px] font-semibold text-gray-800">
                Certified Professional Therapist
              </p>
            </div>
            <div className=" flex justify-normal">
              <div>
                <svg
                  className=" w-6 mt-3"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
              <p className=" m-3  text-[18px] font-semibold text-gray-800">
                High Quality Treatment and Best Equipment
              </p>
            </div>

            <div className=" flex justify-normal">
              <div>
                <svg
                  className=" w-6 mt-3"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
              <p className=" m-3  text-[18px] font-semibold text-gray-800">
                Friendly and Kind Staff
              </p>
            </div>

            <div className=" flex justify-normal">
              <div>
                <svg
                  className=" w-6 mt-3"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
              <p className=" m-3  text-[18px] font-semibold text-gray-800">
                Affordable Prices and Guaranteed Healing
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeSolution;
