import React from "react";
import Image from "../src/assets/pic5.jpg";
import { Row,Col } from "antd";
import Doctor1 from "../src/assets/doctor1.jpg";
import Doctor2 from "../src/assets/doctor2.jpg";
import Doctor3 from "../src/assets/doctor3.jpg";
import Doctor4 from "../src/assets/doctor4.jpg";
import Image2 from '../src/assets/pic3.jpg'
import Image3 from '../src/assets/pic4.jpg'

const Therapist = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">Our Therapist</h1>
          <p className="text-gray-200">Home / Therapist</p>
        </div>
      </div>
      <div className=" text-center mt-20">
        <p className="text-lg text-gray-700 tracking-wide font-bold">
        THERAPIST
        </p>
        <h1 className="text-green-950 mt-6 text-5xl font-bold">
        Meet Our Specialist
        </h1>
        <p className="mt-8 text-[17px]">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p>
      </div>
     <div className=" mt-10 m-5">
     <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor1} alt="" className=" w-[300px] rounded-xl   " />

            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Jonathan Shelby
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor2} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Sebastian Chou
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor3} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Emilly Spector
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor4} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Chris Hammer
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
        </Row>
     </div>
     <div className=" mt-10 m-5">
     <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor1} alt="" className=" w-[300px] rounded-xl   " />

            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Jonathan Shelby
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor2} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Sebastian Chou
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor3} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Emilly Spector
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <img src={Doctor4} alt="" className=" w-[300px] rounded-xl" />
            <p className=" text-[24px] font-semibold flex justify-center mt-3">
              Chris Hammer
            </p>
            <p className=" text-[18px] flex justify-center text-gray-500 font-semibold">
              Expert Therapist
            </p>
          </Col>
        </Row>
     </div>
     <div className="flex justify-center p-10 bg-gray-200 w-full ">
        <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" p-4 m-4">
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
            <div className=" p-4 m-4 ">
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
            <div className="p-4 m-4">
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
            <div className=" p-4 m-4">
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
      <div className="bg-white rounded-lg p-2 m-10 shadow-lg">
        <Row>
          <Col lg={12} xs={24} sm={24} md={12}>
            <div className=" p-6 ">
              <img src={Image2} alt="" className="rounded-lg" />
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
            <p className=" text-green-950 mt-6 text-6xl font-bold">
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

      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="mt-20 ml-10">
            <p className="text-green-950 mt-6 text-6xl font-bold">
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
              src={Image3}
              alt=""
              className="h-[580px] rounded-lg"
            />
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

export default Therapist;
