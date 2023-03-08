import AboutImg from "../assets/png/about-img-lg-2.png";
import styles from "./styles/About.module.css"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-8 -mt-4 -mb-4" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center 
      justify-center md:justify-between motion-safe:animate-fadeIn">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-purps pb-2">
            About Me
          </h2>
          <div className="about-text">
            <p className="pb-5 text-white">
              Hi, my name is Matt Jones, a.k.a glitchyGhost. I'm a
              Frontend Developer and UI designer with an eye for detail.
              I love building intuitive, beautiful websites and applications using
              <b> JavaScript, React & Tailwind.</b>
            </p>
            <p className="pb-5 text-white">
              With decent front-end skills in React.js, Tailwind, SaSS, CSS3 & HTML5,
              I also love technical back-end tasks and problem-solving.
              I am proficient in Node.js, Python, mySQL, MongoDB, Github and CLI.
              See my Skills page for more detail.
            </p>
            {/* hobbies */}
            <p className="text-white">
              In my spare time I like to play <em>Thrash Metal</em> on my guitar.
              I am obsessed with coding and spend a lot of my time learning new{' '}
              <Link to="/skills"
                ><em style={{ color: 'orange' }}><span>skills <i className="fa-solid fa-arrow-right"></i></span></em>
            </Link>
          </p>
        </div>
      </div>

      <div className={`${styles.aboutImg}`}>
        <img
          src={AboutImg}
          width="440px"
          height="440px"
          alt="mugshot selfie"
          className="lgw-[100%] md:ml-auto"
        />
      </div>
    </div>
    </section >
  );
};

export default About;
