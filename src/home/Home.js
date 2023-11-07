import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Image from "../assets/pic2.jpg";
import HomeAbout from "./HomeAbout";
import HomeService from "./HomeService";
import HomePartner from "./HomePartner";
import HomeSolution from "./HomeSolution";
import HomeConsultation from "./HomeConsultation";
import HomeReview from "./HomeReview";
import HomeBlog from "./HomeBlog";

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="mt-20 ml-8">
            <p className="text-lg text-gray-700 tracking-wide font-bold">
              WELCOME TO TUDEBON
            </p>
            <h1 className=" text-green-950 mt-6 text-5xl font-bold">
              Keep Your Bone
              <br />
              Strong & Health
            </h1>
            <p className="mt-8 text-[18px]">
              Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est.
              Suspendisse
              <br />
              potenti. Duis vestibulum magna quis suscipit tempus.
            </p>
          </div>

          <div className="flex justify-normal ml-8 mt-10 ">
            <button className="text-white font-bold text-[16px] bg-gray-500  py-5 px-5 w-[250px] rounded-[5px] ">
              MAKE APPOINMENT
            </button>

            <PlayCircleOutlined className="pl-10 text-[40px] cursor-pointer hover:scale-125 " />
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="relative">
            <img src={Image} alt="" className="mt-10 w-[500px] h-[400px]" />
          </div>
          <Row>
            <Col lg={8} xs={24} sm={24} md={12}>
              <div
                className="bg-gray-500 py-3 px-3 ml-4  rounded-[5px] absolute 
            top-0 -mt-28 "
              >
                <svg
                  className="w-20 text-white ml-14 "
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
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  ></path>
                </svg>
                <span className="text-white text-[18px]  font-semibold">
                  Satisfaction Guarantee
                </span>
                <p className=" text-white text-[16px]">
                  Aenean euismod eros arcu, ut dapibus vestibulum.
                </p>
              </div>
            </Col>
            <Col lg={8} xs={24} sm={24} md={12}>
              <div
                className="bg-gray-500 py-3 px-3 ml-4  rounded-[5px] absolute 
            top-0 -mt-28 "
              >
                <svg
                  className="w-20 text-white ml-14 "
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
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  ></path>
                </svg>
                <span className="text-white text-[18px]  font-semibold">
                  Satisfaction Guarantee
                </span>
                <p className=" text-white text-[16px]">
                  Aenean euismod eros arcu, ut dapibus vestibulum.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <HomeAbout />
      </div>
      <div>
        <HomeService />
      </div>

      <div>
        <HomePartner />
      </div>
      <div>
        {" "}
        <HomeSolution />
      </div>
      <div>
        <HomeConsultation />
      </div>
      <div>
        <HomeReview />
      </div>
      <div>
        <HomeBlog />
      </div>
    </div>
  );
};

export default Home;
