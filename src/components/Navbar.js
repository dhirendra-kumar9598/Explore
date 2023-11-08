import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <div style={{position:"fixed",width:"100%"}}>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark ">
          <div className="container-fluid">
            <Link
              className="navbar-brand "
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
               
              }}
            >
              <Image src="/images/product-logo.png" height={45} width={70} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
                style={{ backgroundColor: "white"}}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    href="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/choose"
                    style={{ color: "white" }}
                  >
                    Why Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/trainers"
                    style={{ color: "white" }}
                  >
                    Trainers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/contact"
                    style={{ color: "white" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
