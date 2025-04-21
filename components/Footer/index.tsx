import React from "react";
import { ScrollUp } from "../../utils/icons";

const Footer = () => (
  <div className="flex items-center  text-primary  text-xs sm:text-base p-4 sm:p-6 bg-brown-50 ">
    <div className="w-9/12">
      <p>© 2025 Raza Khawaja</p>
      <p className="text-xs">Last Updated: March 2025</p>{" "}
    </div>
    <span
      className="w-3/12 flex justify-end cursor-pointer"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ScrollUp className=" text-primary  transform hover:-translate-y-2 hover:text-primary-hover transition duration-500" />
    </span>
  </div>
);

export default Footer;
