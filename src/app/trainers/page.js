import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="trainers">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <h1>OUR GYM TRAINERS</h1>
        </div>

        <div className="trainers-box ">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ padding: "1%" }}
          >
            <div className=" box-name">
              <span>Smirth John</span>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div>
                <Image
                  src={"/images/t1.jpg"}
                  width={300}
                  height={300}
                  alt=""
                  className="box-image"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center box-nav">
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/facebook-logo.png"}
                      width={10}
                      height={23}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/instagram-logo.png"}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/twitter.png"}
                      width={25}
                      height={20}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ padding: "1%" }}
          >
            <div className=" box-name">
              <span>Jean Doe</span>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div>
                <Image
                  src={"/images/t2.jpg"}
                  width={300}
                  height={300}
                  alt=""
                  className="box-image"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center box-nav">
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/facebook-logo.png"}
                      width={10}
                      height={23}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/instagram-logo.png"}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/twitter.png"}
                      width={25}
                      height={20}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ padding: "1%" }}
          >
            <div className=" box-name">
              <span>Alex Den</span>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div>
                <Image
                  src={"/images/t3.jpg"}
                  width={300}
                  height={300}
                  alt=""
                  className="box-image"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center box-nav">
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/facebook-logo.png"}
                      width={10}
                      height={23}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/instagram-logo.png"}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="box-nav-link">
                  <Link href={"#"}>
                    <Image
                      src={"/images/twitter.png"}
                      width={25}
                      height={20}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
