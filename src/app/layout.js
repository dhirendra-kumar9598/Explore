import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Josefin_Sans, Prompt } from "next/font/google";

const josef = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});
// const pro=Prompt({
//   weight:"400",
//   subsets:["latin"]
// })
// console.log(pro);

export const metadata = {
  title: "NeoGym",
  description: "Gym app created in nextJs",
  // icons:{
  //   icon:"favicon.ico"
  // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"main-layout"}>
        <div 
        
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
