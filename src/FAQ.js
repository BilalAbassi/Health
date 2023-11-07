import React from "react";
import Image from "../src/assets/pic5.jpg";
import Image1 from "../src/assets/pic11.jpg";
import { Row, Col } from "antd";

const FAQ = () => {
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" w-[100%] h-[500px]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">FAQs</h1>
          <p className="text-gray-200 mt-3">Home / FAQ</p>
        </div>
      </div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div className="relative">
            <img
              src={Image1}
              alt=""
              className=" mt-40 ml-6 rounded-[10px] w-[550px] h-[580px]"
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
          <div className=" mt-[180px] mr-6">
            <p className=" font-bold text-[18px]">QUESTION FORM</p>
            <h1 className="text-green-950 mt-6 text-5xl font-bold">
              You Can't Find The Answer?
            </h1>
            <p className="mt-6 text-[16px]">
              Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non
              diam elementum ultricies. In hac habitasse platea dictumst. Duis
              vestibulum magna quis suscipit tempus. Nunc pretium placerat.
            </p>
            <div className=" mt-5">
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
                  placeholder="Email"
                  class="w-full p-3 mt-5  border border-black rounded focus:outline-none "
                />

                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full h-[150px] p-3 mt-5  border border-black rounded focus:outline-none "
                />
              </form>
              <div className=" mt-7 ">
                <button className="text-white font-bold text-[16px] bg-gray-500  py-4 px-4  rounded-[5px] ">
                  SEND QUESTION
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className=" text-center mt-20">
        <p className="text-lg text-gray-700 tracking-wide font-bold">FAQ</p>
        <h1 className="text-green-950 mt-6 text-5xl font-bold">
          Frequently Asked Question
        </h1>
        <p className="mt-8 text-[17px]">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst.
          <br />
          Nullam eu elit sed metus convallis lobortis. Cras a iaculis eros.
          Phasellus at lectus viverra, sagittis erat quis.
        </p>
      </div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12}>
          <div class="p-4">
            <div class="relative">
              <select class="bg-gray-600 text-white  p-2 rounded-l w-full h-[60px] focus:outline-none appearance-none">
                <option>When is The Right Time to Check Bones?</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <input
                  type="text"
                  id="message"
                  name="message"
                  class="w-full p-2 rounded-r focus:outline-none "
                />
              </select>
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
          elementum ultricies. In hac habitasse platea dictumst. Nullam eu elit
          sed metus convallis lobortis. Cras a iaculis eros. Phasellus at lectus
          viverra, sagittis erat quis.
        </p>
        <div className="flex justify-center ml-8 mt-10 ">
          <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-3 rounded-[5px] ">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
