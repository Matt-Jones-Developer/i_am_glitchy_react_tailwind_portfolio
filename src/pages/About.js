import AboutImg from "../assets/png/about-img-lg-2.png";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-4" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between
      motion-safe:animate-fadeIn">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-purps pb-2">
            About Me
          </h2>
          <div className="about-text">
          <p className="pb-5 text-white">
            Hi, my name is Matt Jones, a.k.a glitchy. I'm a
            Frontend Developer and UI designer with an eye for detail. I love building intuitive, beautiful websites and applications using 
            <b> JavaScript, React & Tailwind.</b> 
          </p>
          <p className="pb-5 text-white">
            I have decent front-end skills in React.js, Tailwind, SaSS, CSS3 & HTML5. 
            I also love technical back-end tasks and problem-solving. I am proficient in Node.js, Python, SQL and MongoDB, Github and CLI.
          </p>

          <p className="text-white">
            In my spare time I like to play <em>Thrash Metal</em> on my guitar.  I am obsessed with coding and spend a lot of my time learning new skills.
          </p>
          </div>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            width="440px"
            height="440px"
            alt="coding illustration"
            className="lgw-[100%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
