import React from "react";
import SectionHeading from "../../components/SectionHeading";

const About = ({ about }: { about: string }) => {
  const imgSrc = require("./aboutme.png");

  return (
    <div id="about" className="w-full flex flex-col justify-center ">
      <SectionHeading text={"About Me"} index={1} />
      <div className=" text-primary  about-container">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full">
          <div className="w-50 pr-2 max-w-lg leading-relaxed text-xl  text-primary">
            I'm currently a UX Designer at{" "}
            <a href="https://www.smithweb.com" target="_blank">
              {" "}
              <span
                className="font-semibold hover:opacity-75"
                style={{ color: "#000" }}
              >
                Smith & Associates
              </span>
            </a>
            , based in Houston, Texas. Previously, I have been a full stack
            Software Engineer at{" "}
            <a href="https://www.educative.io" target="_blank">
              {" "}
              <span className="cursor-pointer font-semibold hover:opacity-75 gradient-purple text-gradient">
                Educative
              </span>
            </a>
            , and a Design Engineer at{" "}
            <a href="https://www.onesignal.com" target="_blank">
              <span
                className="cursor-pointer font-semibold hover:opacity-75"
                style={{ color: "#e54b4d" }}
              >
                OneSignal
              </span>
            </a>
            . I have also worked with several research groups from various
            universities as a UX Consultant through the{" "}
            <a href="https://www.dvclab.net/" target="_blank">
              DVC Lab
            </a>{" "}
            at Purdue University.
            <br></br>
            <br></br>
            Outside of work, you will often find me either immersed in a
            single-player video game, discussing sports a little too
            passionately, or trying to paint (I use soft pastels!). If you're
            interested in talking more about my work, research interests, or
            simply want to rant about how bad Manchester United are right now,
            send me an email over at raza.khawaja@hotmail.com.
          </div>
          <img
            loading="lazy"
            className="w-2/4 sm:h-auto sm:w-auto sm:max-w-md sm:max-h-md"
            src={imgSrc}
          />
        </div>
        <br></br>
        ...
        <br></br>
        <div className="leading-relaxed text-xl  text-primary">
          If you've made it this far and aren't bored yet, here's some more info
          about me!
          <br></br>
          <br></br>
          <span className="font-medium">
            Why did I switch from software engineering to design?
          </span>
          <br></br>
          <br></br>I found that design allowed me to fully channel my creativity
          and explore my interest in human behaviour. Designing experiences
          brought me more joy and fulfillment than engineering them. Plus, with
          experience and education in both fields, I also enjoy working at the
          intersection of design and engineering.
          <br></br>
          <br></br>
          <span className="font-medium">
            What are my thoughts on AI and design?
          </span>
          <br></br>
          <br></br>
          AI can definitely be used to design better experiences and allow the
          designer to focus more on understanding user needs and empathazing
          with them - things that AI can not do. However, AI is innovating fast
          so don't quote me in a few years time if a humanoid robot shows up
          asking for your clothes, boots and motorcycle.
          <br></br>
          <br></br>
          <span className="font-medium">
            What specifically interests me about design?
          </span>
          <br></br>
          <br></br>I enjoy working in ambigious spaces where I can speak to
          people and figure out how their problems can be solved. Specifically,
          I am most interested in cross-channel interaction design, AI's role in
          modern UX design, and studying{" "}
          <a href="https://www.deceptive.design/" target="_blank">
            dark patterns
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default About;
