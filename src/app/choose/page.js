import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="choose">
    
      <div
        className="d-flex justify-content-center align-items-center flex-column p-5"
        // style={{ height: "100%" }}
      >
        <div className="d-flex justify-content-center align-item-center">
          <h1>WHY CHOOSE US</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <div>
              <Image
                src="/images/u-1.png"
                width={70}
                height={70}
                alt="Img..."
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4>QUALITY EQUIPMENT</h4>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  Transform Your Fitness Journey with Our State-of-the-Art Gym
                  Equipment
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <div>
              <Image
                src="/images/u-4.png"
                width={70}
                height={70}
                alt="Img..."
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4>NUTRITION</h4>
              </div>

              <div>
                <p style={{ textAlign: "center" }}>
                  Fuel Your Potential with Our Nutrient-Packed Goodness
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <div>
              <Image
                src="/images/u-2.png"
                width={70}
                height={70}
                alt="Img..."
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4>HEALTH DIET PLAN</h4>
              </div>

              <div>
                <p style={{ textAlign: "center" }}>
                  Elevate Your Wellness Journey with Our Customized Health Diet
                  Plans
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <div>
              <Image
                src="/images/u-3.png"
                width={70}
                height={70}
                alt="Img..."
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4>SPORT TRAINING</h4>
              </div>

              <div>
                <p style={{ textAlign: "center" }}>
                  Unleash Your Athletic Potential with Our Elite Sport Training
                  Programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
