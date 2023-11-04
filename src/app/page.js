"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import { Nosifer } from "next/font/google";
import { useEffect } from "react";
import Head from "next/head";
const nosifer = Nosifer({
  weight: "400",
  subsets: ["latin"],
});

export async function gernerateMetadata(){
  return(
    {
      title:"home"
    }
  )
}


export default function Home() {
  

useEffect(()=>{

  require("bootstrap/dist/js/bootstrap.bundle.min.js");
},[])

  
  return (
    <div className="home" >
     
      <div
        className="homeTitle d-flex flex-column align-items-center justify-content-center"
        // style={{ backgroundSize: "100vh" }}
      >
        <div>
          <h5 className={nosifer.className}>
            FITNESS
          </h5>
        </div>
        <div>
          <h3 className={nosifer.className}    style={{fontSize: "5vw" }}>
            TRAINING
          </h3>
        </div>
        <div>
          <h1  className={nosifer.className} style={{ fontSize: "7vw" }}>
            NEOGYM
          </h1>
        </div>
      </div>
    </div>
  );
}
