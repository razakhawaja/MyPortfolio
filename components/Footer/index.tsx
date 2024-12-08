import React from "react";
import { ScrollUp } from "../../utils/icons";

const Footer = () => (
  <div className="flex items-center text-blueGray-500 dark:text-gray-600 text-xs sm:text-base p-4 sm:p-6 bg-brown-50 dark:bg-dark-80">
    <div className="w-9/12">
      <p>© 2024 Raza Khawaja</p>
      <p className="text-xs">Last Updated: November 2024</p>{" "}
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
      <ScrollUp className="text-blueGray-500 dark:text-gray-600 transform hover:-translate-y-2 hover:text-primary dark:hover:text-primary-light transition duration-500" />
    </span>
  </div>
);

export default Footer;
