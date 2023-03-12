import { useEffect } from "react";
import Devicons from "../components/Devicons";
import styles from "./styles/Skills.module.css"

const Skills = () => {
  
  useEffect(() => {
    // Scroll to a specific element on the page
    const targetElement = document.querySelector("#target");
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <section className={`${styles.skillSection} mx-auto flex p-4 bs-tone px-5 py-12 text-center`}
      id="target">
        <div
          className="container md:w-[50%] mx-auto text-white">
          <h2 className="skills-title text-center mx-auto text-6xl font-bold 
            mb-5 border-b-[5px] w-[340px] border-purps pb-2">
            Skills & Languages
          </h2>
          <p className="text-white skillsIntro">
            Here are all the languages, frameworks, tools and software packages I use.
            I'm currently taking a Data Structures & Algorithms course, as well as completing my CS50 
            in Computer Science with Harvard University online.<br/>
            <em><b> Hover over the icons to find out more</b></em>
          </p>
        </div>
      </section>
      {/* import devicons grid */}
      <Devicons />
      
    </>
  );
};

export default Skills;
