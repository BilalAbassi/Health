import React from "react";
import { Row, Col } from "antd";
import Image from "../assets/pic4.jpg";

const HomeReview = () => {
  return (
    <div>
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
              src={Image}
              alt=""
              className=" w-[600px] h-[580px] rounded-lg"
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

export default HomeReview;
