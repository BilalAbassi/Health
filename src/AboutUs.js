import React from "react";
import Image from "../src/assets/pic5.jpg";
import Image1 from "../src/assets/pic7.jpg";
import Image2 from "../src/assets/pic8.jpg";
import { Row, Col } from "antd";
import Doctor1 from "../src/assets/doctor1.jpg";
import Doctor2 from "../src/assets/doctor2.jpg";
import Doctor3 from "../src/assets/doctor3.jpg";
import Doctor4 from "../src/assets/doctor4.jpg";
import Logo from "../src/assets/lipsum1.png";

const AboutUs = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-full" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">About Tudebon</h1>
          <p className="text-gray-200">Home / AboutUs</p>
        </div>
      </div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="relative">
            <img
              src={Image1}
              alt=""
              className=" mt-40 ml-8 rounded-[10px] h-[580px]"
            />
            <div
              className="bg-green-950 py-3 px-3 w-[230px] h-[160px] rounded-[5px]
               absolute top-0 
         mt-5"
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
            <div className="bg-white rounded-lg p-5 m-6 shadow-lg border-4 border-l-green-950">
              <p className=" text-[18px]" style={{ fontStyle: "italic" }}>
                “Cras accumsan, neque eget eleifend vestibulum, tortor leo
                venenatis sem, a vehicula tortor eros sed turpis. Integer urna
                magna, vehicula at efficitur gravida, luctus nec nisl.”
              </p>
            </div>
            <p className=" text-[20px] font-semibold">Beatrix Kiddo</p>
            <p className="text-[18px]">Tudebon CEO</p>
          </div>
        </Col>
      </Row>

      <div className="flex justify-center p-10  bg-gray-200">
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

              <p className=" flex justify-center text-[40px] font-bold">250+</p>
              <p className=" flex justify-center text-[18px] font-bold">
                Therapist & Staff
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

              <p className=" flex justify-center text-[40px] font-bold">
                1,200+
              </p>
              <p className=" flex justify-center text-[18px] font-bold">
                Happy Patients
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
        </Row>
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
      <div className=" mt-10 m-5 ">
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

        <div className="flex justify-center mt-10 ">
          <button className="text-white font-bold text-[16px] bg-gray-500  py-4 px-4 rounded-[5px] ">
            VIEW ALL THERAPIST
          </button>
        </div>
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
      <div className=" flex">
        <Row>
        <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8 ">
              <img src={Logo} alt="" className=" w-[250px]" />
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8 ">
              <img src={Logo} alt="" className=" w-[250px]" />
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8 ">
              <img src={Logo} alt="" className=" w-[250px]" />
            </div>
          </Col>
          
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8 ">
              <p className="text-lg text-gray-700 tracking-wide font-bold">
                PARTNER
              </p>
              <p className=" text-green-950 mt-6 text-4xl font-bold">
                Partners & Associations
              </p>
              <p className="mt-8 text-[18px]">
                Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis <br />{" "}
                est. Suspendisse potenti duis.
              </p>
            </div>
          </Col>
         
        </Row>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
