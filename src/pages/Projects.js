import styles from "./styles/Projects.module.css"
import cristalVision from "../assets/png/cristalvision.png";
import musicForYou from "../assets/png/musicforyou_api.png";
import gameBoy from "../assets/png/gameboy_site.png";
import fineWeather from "../assets/png/fine_days_weather.png";
import passwordGen from "../assets/png/password_gen.png";
import codeBoss from "../assets/gif/code_boss_intro_loop.gif";

import data from "../data.json";

// map between id and the path
const projectImages = {
  1: fineWeather,
  2: passwordGen,
  3: musicForYou,
  4: cristalVision,
  5: codeBoss,
  6: gameBoy
}

const Projects = () => {
  // this array is data.json
  const projects = data;

  return (
    <section className={`${styles.projectSection} bg-primary text-white px-5 pt-8 -pb-24`}>
      <div className="container">
        <div className="about mb-5">
          <h2 className="text-4xl font-bold border-purps pb-2">
            Projects
          </h2>

          <p className="pb-5 text-white">
            Some of my favourite work. Made using a mix of vanilla JavaScript, HTML5 and CSS3.  
            I love building CLI programs using Node.js too!
          </p>
        </div>
      </div>
      <div className={`${styles.projects}`}>
        {/* dynamically rendered project cards */}
        {/* map and track each card [i] */}
        {projects.map((project, i) => {
          return (
            <div className="project-boxes" key={i}>
              <img src={projectImages[project.id]} alt={project.title} />
              <div className="bg-primary">
                <p className="py-5 text-center font-bold text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="btn text-white bg-lumi-pink font-extrabold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="btn bg-lumi-green font-extrabold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* video of codeBoss [TODO] */}
      <div className="demo-gif"></div>
    </section>
  );
};

export default Projects;
