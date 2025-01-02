import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Markdown from "../../components/Markdown";

const profileImg = require("../../public/aboutme.png");

const About = ({ about }: { about: string }) => (
  <div id="about">
    <SectionHeading text={"About Me"} index={1} />
    <div className="text-blueGray-500 dark:text-gray-600 about-container">
      {/* <div className="flex justify-center items-center mb-8 sm:mt-0 sm:col-end-6 sm:col-span-2 ">
          <img
            alt="profile image"
            src={profileImg}
            className="h-auto w-auto max-w-md max-h-md rounded"
          />
        </div> */}
      <Markdown content={about} isNotFullPage />
    </div>
  </div>
);

export default About;
