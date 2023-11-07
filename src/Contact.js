import React from "react";
import Image from "../src/assets/pic5.jpg";
import { Col, Row } from "antd";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";


// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

const Contact = () => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div>
      <div className=" relative">
        <img src={Image} alt="" className=" h-[500px] w-[100%]" />
        <div className="absolute -mt-60 px-4 py-3  w-full">
          <h1 className="text-green-950 font-bold text-6xl">Contact Us</h1>
          <p className="text-gray-200 mt-4">Home / Contact Us</p>
        </div>
      </div>
      <Row>
        <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
          <div className="mt-20 ml-8">
            <p className="text-lg text-gray-700 tracking-wide font-bold">
              CONTACT US
            </p>
            <h1 className=" text-green-950 mt-6 text-5xl font-bold">
              Get In Touch
            </h1>
            <p className="mt-8 text-[18px]">
              Mauris vitae eros placerat velit molestie mollis. Aenean euismod
              eros arcu, ut dapibus urna vestibulum facilisis. Duis et facilisis
              augue, ac malesuada tortor. Duis vitae mattis nulla. Cras
              accumsan, neque eget eleifend vestibulum.
            </p>
          </div>

          <div className=" flex justify-between ml-6 mt-6">
            <div class="flex items-center">
              <div class="mr-4">
                <svg
                  className="w-12 mt-6"
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
              <p class="text-lg mr-6 mt-6">
                Phone
                <p>+123-234-1234</p>
              </p>
            </div>
            <div class="flex items-center">
              <div class="mr-4">
                <svg
                  className=" w-12 mt-6"
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
              <p class="text-lg mr-6 mt-6">
                Email
                <br />
                <p>hello@awesomesite.com</p>
              </p>
            </div>
          </div>
          <div className=" flex justify-between ml-6 mt-6">
            <div class="flex items-center">
              <div class="mr-4">
                <svg
                  className="w-12 mt-6"
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
              <p class="text-lg mr-6 mt-6">
                Phone
                <p>+123-234-1234</p>
              </p>
            </div>
            <div class="flex items-center">
              <div class="mr-4">
                <svg
                  className=" w-12 mt-6"
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
              <p class="text-lg mr-6 mt-6">
                Email
                <br />
                <p>hello@awesomesite.com</p>
              </p>
            </div>
          </div>

          <hr class="border-t-4 border-gray-500 my-4 ml-8" />
          <p className=" ml-8 text-black text-2xl font-semibold">
            Follow Us On
          </p>
          <div className=" ml-8 mt-5">
            <WhatsAppOutlined className=" text-2xl cursor-pointer" />
            <FacebookOutlined className=" text-2xl ml-6 cursor-pointer" />
            <YoutubeOutlined className=" text-2xl ml-6 cursor-pointer" />
            <LinkedinOutlined className=" text-2xl ml-6 cursor-pointer" />
          </div>
        </Col>
        <Col lg={12} xs={24} sm={24} md={12} xxl={24}>
          <div className=" mt-20 ml-6">
            <p className=" text-2xl font-semibold">Send Your Message</p>

            <form className=" mt-8 p-4">
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
                id="textfield"
                name="Name"
                placeholder="Subject"
                class="w-full p-3 mt-5  border border-black rounded focus:outline-none "
              />
              <input
                type="text"
                id="textfield"
                name="Name"
                placeholder="Your Message"
                class="w-full line-clamp-2 h-[200px] p-3 mt-5  border border-black rounded focus:outline-none "
              />
              <div className="flex justify-center ml-8 mt-10 ">
                <button className="text-white font-bold text-[16px] bg-gray-500  py-3 px-4  rounded-[5px] ">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
      {/* <div className=" w-full h-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName=" w-[100%] h-[100%]"
          center={center}
          zoom={10}
        />
      )}
    </div> */}
    </div>
  );
};

export default Contact;
