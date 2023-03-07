import { Link } from "react-router-dom";
import ghostKraken from "../assets/png/ghost_kraken.png";
import styles from "./styles/Hero.module.css"

const Hero = () => {
  return (
    <section className={`px-5 pb-10 ${styles.heroSection} flex`}>
      <div className="flex pt-0 backdrop:ml-auto">
      </div>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between
      motion-safe:animate-fadeIn">
        <div className={`${styles.heroInfo} pb-5 md:pb-0`}>
          <h1 className="text-4xl lg:text-6xl text-white">
            <br /><span className="text-accent">Matt Jones</span><br />
            Frontend Developer
          </h1>
          <p className="py-5 text-lumi-pink font-medium">
            Your new hire for awesome project builds written in React.js, Tailwind, JavaScript, Node.js, HTML5 and CSS3!
          </p>
          <Link
            to="/projects"
            className={`${styles.btnCTA} btn bg-purps gap-2 text-white px-6 py-3 my-8`}
          >
            Top Projects
          </Link>
        </div>
        {/* ghost kraken image */}
        <div className="animate-floating inline-block ml-30 mt-5 pt-0 backdrop:ml-auto">
          <img
            src={ghostKraken}
            alt="ghost kraken cartoon art by junior betta"
            className="lgw-[80%] ml-auto"
            width="600px"
            height="800px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
