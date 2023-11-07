import React from "react";
import Image from "../src/assets/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="mx-auto bg-[#273157] p-6 w-full h-full">
        <nav>
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <img src={Image} alt="" className="w-50 h-20" />
            <div class="flex md:order-2">
              <div class="flex items-center">
                <div class="mr-4">
                  <svg
                    className="w-10 text-white"
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
                <p class="text-lg text-white font-semibold mr-6">
                  Call Us <br />
                  <p>+123-234-1234</p>
                </p>
              </div>
              <button
                data-collapse-toggle="mobile-menu-3"
                type="button"
                class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul className="flex justify-center space-x-8 pr-8 pt-7 ml-20 text-1xl">
                <li>
                  <Link to="/" className=" text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-white">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white">
                    <div class="relative group inline-block">
                      Services
                      <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Link to="/services">Services </Link>
                            <br />

                            <Link to="/servicedetail">Services Detail</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white">
                    <div class="relative group inline-block">
                      Pages
                      <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Link to="/appointment">Appointment</Link>
                            <br />
                            <Link to="/therapist">Therapist</Link>
                            <br />
                            <Link to="/faq">FAQ</Link>
                            <br />
                            <Link to="/error">404 error</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white">
                    <div class="relative group inline-block">
                      Blog
                      <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                        <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Link to="/blog">Blog </Link>
                            <br />

                            <Link to="/singlepost">Single Post</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white">
                    ContactUs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      {/* <div class="bg-[#273157] p-4 w-[100%] ">
        <div class="container mx-auto flex justify-between items-center">
          <div className="flex justify-center ">
            <img src={Image} alt="" className="w-50 h-20" />
            <ul className="flex justify-center space-x-8 pr-8 pt-7 ml-20 text-1xl">
              <li>
                <Link to="/" className=" text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white">
                  AboutUs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  <div class="relative group inline-block">
                    Services
                    <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <Link to="/services">Services </Link>
                          <br />

                          <Link to="/servicedetail">Services Detail</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  <div class="relative group inline-block">
                    Pages
                    <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <Link to="/appointment">Appointment</Link>
                          <br />
                          <Link to="/therapist">Therapist</Link>
                          <br />
                          <Link to="/faq">FAQ</Link>
                          <br />
                          <Link to="/error">404 error</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  <div class="relative group inline-block">
                    Blog
                    <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div class=" bg-green-900 shadow-lg w-[130px] p-4">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <Link to="/blog">Blog </Link>
                          <br />

                          <Link to="/singlepost">Single Post</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
          <div class="flex items-center">
            <div class="mr-4">
              <svg
                className="w-10 text-white"
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
            <p class="text-lg text-white font-semibold mr-6">
              Call Us <br />
              <p>+123-234-1234</p>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
