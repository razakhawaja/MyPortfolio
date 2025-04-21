import React from "react";
import Link from "next/link";
import { Intro } from "../../constants";
import { Github, LinkedIn, Mail } from "../../utils/icons";

const jumbotronImg = require("../../public/jumbotron.jpeg");

const Jumbotron = ({ intro }: { intro: Intro }) => {
  const socials = [
    {
      name: "LinkedIn",
      href: intro.socials.linkedin,
      svg: (
        <LinkedIn className="text-xl hover:text-primary-hover transition-colors duration-200" />
      ),
    },
    {
      name: "Email",
      href: intro.socials.email,
      svg: (
        <a href="mailto:raza.khawaja@hotmail.com">
          <Mail className="text-xl hover:text-primary-hover  transition-colors duraion-200" />
        </a>
      ),
    },
    {
      name: "Github",
      href: intro.socials.github,
      svg: (
        <Github className="text-xl hover:text-primary-hover transition-colors duration-200" />
      ),
    },
  ];

  return (
    <>
      <div
        className="w-full sm:min-h-vh flex flex-col sm:flex-row"
        style={{ lineHeight: 1.1 }}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-primary tracking-wider font-mono leading-loose text-base font-normal">
            {intro.greeting}
          </h1>
          <h2 className="text-6xl text-primary sm:text-7xl font-bold mb-4">
            {intro.name}.
          </h2>
          <p className="max-w-lg leading-normal text-xl text-primary">
            {intro.intro}
          </p>
          <div className="pt-8 flex">
            {socials.map((social, _) => (
              <Link href={social.href} key={social.name}>
                <a target="_blank">
                  <div className="text-gray-400 cursor-pointer mr-4">
                    {social.svg}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <img
          alt="jumbotron image"
          src={jumbotronImg}
          className="h-80 m-8 rounded-full w-80 border-4 border-primary  self-center flex"
        />
      </div>
    </>
  );
};

export default Jumbotron;
