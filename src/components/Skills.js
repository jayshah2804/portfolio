import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NextJs from "../assets/nextJs2.png";
import Github from "../assets/github.png";
import Git from "../assets/Git.png";
import Jest from "../assets/Jest.png";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 w-full h-screen" name="skills">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked on</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Javascript} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NextJs} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Next Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Jest} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Jest</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Git} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
