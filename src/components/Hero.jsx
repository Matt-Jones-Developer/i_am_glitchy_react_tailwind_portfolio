import { Link } from "react-router-dom";
import ghostKraken from "../assets/png/ghost_kraken.png";
import styles from "./styles/Hero.module.css";

const Hero = () => {
  // to projects scroll
  const handleScroll = () => {
    window.scrollTo({
      top: 220,
      left: 0,
      behavior: 'smooth'

    });
  };

  return (
    // hero section component
    <section className={`-mt-6 px-5 pb-10 ${styles.heroSection} flex`}>
      <div className="flex pt-0"></div>
      {/* animated hero container using Tailwind config file */}
      <div
        className={`${styles.container} flex mx-auto motion-safe:animate-fadeIn`}
      >
        {/* hero title */}
        <div className={`${styles.heroInfo} pb-5 md:pb-0`}>
          <h1 className="text-4xl lg:text-6xl text-white">
            <br />
            <span className="text-accent">Matt Jones</span>
            <br />
            Front-End Developer
          </h1>
          {/* brand tagline */}
          <p className="py-5 text-lumi-pink font-medium">
            Your new hire for awesome project builds written in React.js,
            Tailwind, JavaScript, Node.js, HTML5 and CSS3!
          </p>
          {/* CTA projects */}
          <Link
            to="/projects"
            onClick={handleScroll}
            className={`${styles.btnCTA} btn bg-purps gap-2 text-white px-6 py-3 my-16`}
          >
            Top Projects
          </Link>
        </div>
        {/* ghost kraken image */}
        {/* animated hero image using Tailwind config file */}
        <div className="animate-floating inline-block ml-30 mt-5 pt-0">
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
