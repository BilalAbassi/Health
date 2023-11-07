import React from "react";
import Logo from "../assets/lipsum1.png";
import Logo1 from "../assets/lipsum2.png";
import Logo2 from "../assets/lipsum3.png";
import Logo3 from "../assets/lipsum4.png";
import Logo4 from "../assets/lipsum5.png";
import Logo5 from "../assets/lipsum6.png";
import { Col, Row } from "antd";

const HomePartner = () => {
  return (
    <>
      <div className=" flex">
        <Row>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8 ">
              <p className="text-lg text-gray-700 tracking-wide font-bold">
                PARTNER
              </p>
              <p className=" text-green-950 mt-6 text-5xl font-bold">
                Partners & Associations
              </p>
              <p className="mt-8 text-[18px]">
                Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis <br />{" "}
                est. Suspendisse potenti duis.
              </p>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={24} md={12} xxl={24}>
            <div className=" m-8">
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
        </Row>
      </div>
    </>
  );
};

export default HomePartner;
