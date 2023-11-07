import React from "react";
import { Row, Col } from "antd";
import Image from "../assets/pic2.jpg";

const HomeAbout = () => {
  return (
    <div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="relative">
            <img
              src={Image}
              alt=""
              className=" mt-40 ml-4 rounded-[5px]   h-[580px]"
            />
            <div
              className="bg-green-950 py-3 px-3 w-[230px] h-[160px] rounded-[5px]
               absolute top-0  mt-5  "
            >
              <p className="ml-[30px] text-white font-bold text-[50px]">15th</p>
              <p className=" ml-3 text-white text-[18px] font-semibold">
                Years of Experience
              </p>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className=" mt-[180px]">
            <p className=" font-bold text-[18px]">ABOUT TUDEBON</p>
            <h1 className="text-green-950 mt-6 text-5xl font-bold">
              Providing a High
              <br />
              Level of Care
            </h1>
            <p className="mt-6 text-[16px]">
              Mauris vitae eros placerat velit molestie mollis. Aenean euismod
              eros arcu, ut
              <br />
              dapibus urna vestibulum facilisis. Duis et facilisis augue, ac
              malesuada tortor.
              <br />
              Duis vitae mattis nulla. Cras accumsan, neque eget eleifend
              vestibulum.
            </p>
            <p className="mt-3 text-[16px]">
              Ut malesuada lectus non ante eleifend, ac consectetur lacus
              viverra. Etiam
              <br />
              ornare neque augue, ut egestas nunc congue a.
            </p>
            <div className=" flex justify-between">
              <div class="flex items-center">
                <div class="mr-4">
                  <svg
                    className="text-black w-16 mt-6"
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <p class=" text-[24px] mt-6">
                  Our Vision <br />
                  <p className="text-[16px]">
                    Consectetur adipiscing elit. Ut elit
                    <br /> tellus.
                  </p>
                </p>
              </div>
              <div class="flex items-center mr-6">
                <div class="mr-4">
                  <svg
                    className="text-black w-16 mt-6"
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
                      d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p class=" text-[24px] mt-6">
                  Our Mission
                  <br />
                  <p className="text-[16px]">
                    Consectetur adipiscing elit. Ut elit
                    <br /> tellus.
                  </p>
                </p>
              </div>
            </div>
            <div className="flex justify-normal mt-5 ">
              <button className="text-white font-bold text-[16px] bg-gray-500  py-4 px-4 w-[200px]
              uppercase rounded-[4px] ">
                Read More
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAbout;
