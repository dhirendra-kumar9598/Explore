"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handle = async (e) => {
    e.preventDefault();
    const data = await fetch("/api", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const resp = await data.json();
    if (data.status == 200) {
      alert("Saved");
      router.push("/");
    }
    console.log(resp);
  };
  return (
    <div>
      <div
        className="main-contact "
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="contact-left">
          <img
            src={"/images/contact-img.jpg"}
            alt=""
            className="contact-image"
          />
        </div>
        <div className="contact-right d-flex justify-content-center align-items-center flex-column">
          <div>
            <div>
              <h1 style={{ color: "white" }}>CONTACT US</h1>
            </div>
          </div>
          <div>
            <form onSubmit={handle}>
              <div className="">
                <div className="row g-3">
                  <div className="mb-3 col-auto">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control  form-control-lg"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="mb-3 col-auto">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control  form-control-lg"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="mb-3 col-auto">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="form-control  form-control-lg"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="mb-3 col-auto">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      className="form-control  form-control-lg"
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3 d-flex justify-content-center">
                  <div className="mb-3 col-auto">
                    <button type="submit" className="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
