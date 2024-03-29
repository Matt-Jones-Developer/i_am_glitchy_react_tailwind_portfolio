import styles from "./styles/Projects.module.css"
// import cristalVision from "../assets/png/cristalvision.png";
import musicForYou from "../assets/png/musicforyou_api.png";
import gameBoy from "../assets/png/gameboy_site.png";
import superdrug from "../assets/png/superdrug-hero.png";
import passwordGen from "../assets/png/password_gen.png";
import codeBoss from "../assets/gif/code_boss_intro_loop.gif";
import wifinder from "../assets/png/wifinder_homepage.png";

import data from "../data.json";

// map between id and the path
const projectImages = {

  1: wifinder,
  2: superdrug,
  3: musicForYou,
  4: passwordGen,
  5: codeBoss,
  6: gameBoy
}

const Projects = () => {
  // this array is data.json
  const projects = data;

  return (
    <section className={`${styles.projectSection} bg-primary text-white px-5 pt-8 -mb-16`}>
      {/* project section */}
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-purps pb-2">
            Projects
          </h2>

          <p className="pb-5 text-white">
            Some of my best projects. I built them using a mix of React &
            Tailwind, vanilla JavaScript, HTML5 and CSS3.
            I love building CLI programs using Node.js too!
          </p>
        </div>
      </div>
      {/* project grid */}
      <div className="projects container grid md:grid-cols-3 gap-12 mx-auto ">
        {/* dynamically rendered project cards */}
        {/* map and track each card [i] */}
        {projects.map((project, i) => {
          return (
            // allow positioning child elements
            <div className="relative" key={i}>
              <img src={projectImages[project.id]} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[16px] bottom-0 w-[90%] h-[90%] mx-auto
              bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                <p className="py-5 text-center font-bold px-2 text-white opacity-80">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 mr-5 text-white bg-lumi-pink font-extrabold
                    hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 text-slate-700 bg-lumi-green hover:bg-slate-700 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* highlight project */}
      {/* <div className="container flex mx-auto w-max-full mt-12 pt-2 pb-16 mb-16">
        <a href="https://wi-finder.netlify.app/">
          <img
            src={wifinder}
            alt="wifinder: wifi search engine homepage"
            className="lgw-[80%] mx-auto"
            width="1600px"
          />
        </a>
      </div> */}
    </section>
  );
};

export default Projects;
