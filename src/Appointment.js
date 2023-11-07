import React from "react";
import Image from "../src/assets/pic5.jpg";
import Image1 from "../src/assets/pic4.jpg";
import { Col, Row } from "antd";
const Appointment = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">Appointment</h1>
          <p className="text-gray-200 mt-3">Home / Appointment</p>
        </div>
      </div>
      <div className=" text-center mt-20">
        <p className="text-lg text-gray-700 tracking-wide font-bold">BOOKING</p>
        <h1 className="text-green-950 mt-6 text-5xl font-bold">
          Make An Appointment
        </h1>
        <p className="mt-8 text-[17px]">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p>
      </div>
      <div className=" m-9">
        <form>
          <input
            type="text"
            id="textfield"
            name="Name"
            placeholder="Name"
            class="w-full p-3  border border-black rounded focus:outline-none "
          />
          <input
            type="text"
            id="textfield"
            name="Name"
            placeholder="Phone"
            class="w-full p-3 mt-5  border border-black rounded focus:outline-none "
          />
          <input
            type="text"
            id="textfield"
            name="Name"
            placeholder="Email"
            class="w-full p-3 mt-5  border border-black rounded focus:outline-none "
          />
          <Row>
            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div class="mb-4">
                <select
                  id="dropdown"
                  name="dropdown"
                  class="w-full p-3 mt-5  border border-black rounded focus:outline-none "
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </Col>
            <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
              <div class="mb-4 ml-10">
                <input
                  type="date"
                  id="date"
                  name="date"
                  class="w-full p-3 mt-5  border border-black rounded focus:outline-none"
                />
              </div>
            </Col>
          </Row>
          <div className="flex justify-center ml-8 mt-10 ">
            <button className="text-white font-bold text-[16px] bg-gray-500  py-4 px-4  rounded-[5px] ">
              MAKE APPOINMENT
            </button>
          </div>
        </form>
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
          <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-3 w-[250px] rounded-[5px] ">
            FREE CONSULTATION
          </button>
        </div>
      </div>

      <div className=" text-center mt-20">
        <p className="text-lg text-gray-700 tracking-wide font-bold">
          HOW WE WORK
        </p>
        <h1 className="text-green-950 mt-6 text-5xl font-bold">
          Stages of Consultation
        </h1>
        <p className="mt-8 text-[17px]">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p>
      </div>
      <div className="flex justify-center m-6">
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[20px] font-semibold mt-5">
                Make an Appointment
              </p>
              <p className=" flex justify-center text-[17px] mt-3 ">
                Suspendisse nec magna ac
                <br /> magna sagittis tristique.
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[20px] font-semibold mt-5">
                Consultation
              </p>
              <p className=" flex justify-center text-[17px] mt-3 ">
                Suspendisse nec magna ac
                <br /> magna sagittis tristique.
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[20px] font-semibold mt-5">
                Chiropractic Therapy
              </p>
              <p className=" flex justify-center text-[17px] mt-3 ">
                Suspendisse nec magna ac
                <br /> magna sagittis tristique.
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>

              <p className=" flex justify-center text-[20px] font-semibold mt-5">
                Satisfied Review
              </p>
              <p className=" flex justify-center text-[17px] mt-3 ">
                Suspendisse nec magna ac
                <br /> magna sagittis tristique.
              </p>
            </div>
          </Col>
        </Row>
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
              src={Image1}
              alt=""
              className=" w-[600px] h-[580px] rounded-lg"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
