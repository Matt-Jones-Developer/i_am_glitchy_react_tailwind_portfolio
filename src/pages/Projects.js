import cristalVision from "../assets/png/cristalvision.png";
import musicForYou from "../assets/png/musicforyou_api.png";
import gameBoy from "../assets/png/gameboy_site.png";
import fineWeather from "../assets/png/fine_days_weather.png";
import passwordGen from "../assets/png/password_gen.png";
import codeBoss from "../assets/gif/codeboss.gif";

import data from "../data.json";

// map between id and the path
const projectImages = {
  4: cristalVision,
  5: musicForYou,
  6: gameBoy,
  1: fineWeather,
  2: passwordGen,
  3: codeBoss
}

const Projects = () => {
  // this array is data.json
  const projects = data;

  return (
    <section className="projectsIntro bg-primary text-white px-5 py-10 pb-16">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-purps pb-2">
            Projects
          </h2>

          <p className="pb-5 text-white">
            Some of my best projects. I built them using a mix of React &
            Tailwind, vanilla JavaScript, HTML5 and CSS3.  I love building CLI programs using Node.js too!
          </p>
        </div>
      </div>
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
      {/* video of codeBoss? */}
      <div className="demo-gif"></div>
    </section>
  );
};

export default Projects;
