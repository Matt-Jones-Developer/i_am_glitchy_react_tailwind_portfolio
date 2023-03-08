import "devicon/devicon.min.css";
import styles from "./styles/Devicons.module.css";

const Devicons = () => {
  // [TODO] generate these via json

  return (
    <>
      {/* devicons grid */}
      <section className="devicons container flex mx-auto p-4 pb-16 animate-floating">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 mx-auto iconGrid">
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-javascript-plain`}
                title="JavaScript"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-react-original`}
                title="React.js"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-tailwindcss-plain`}
                title="Tailwind CSS"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-html5-plain`}
                title="HTML-5"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-css3-plain`}
                title="CSS-3"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-sass-original`}
                title="SCSS"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-redux-original`}
                title="Redux"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-typescript-plain`}
                title="TypeScript"
              ></i>
            </a>
          </div>
        </div>
      </section>
      {/* row 2 */}
      <section className="devicons container flex mx-auto pt-0 p-4 pb-16 animate-floating ">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 mx-auto iconGrid">
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-nodejs-plain`}
                title="Node.js"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-npm-original-wordmark`}
                title="npm"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-python-plain`}
                title="Python"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i className={`${styles.devIcon} devicon-git-plain`}
              title="Git"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-github-original`}
                title="Github"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-flask-original`}
                title="Flask"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-pandas-original`}
                title="Pandas"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-mongodb-plain`}
                title="MongoDB"
              ></i>
            </a>
          </div>
        </div>
      </section>
      {/* row 3 */}
      <section className="devicons container flex mx-auto pt-0 p-4 pb-16 animate-floating">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 mx-auto iconGrid">
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-vscode-plain`}
                title="VSCode"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i className={`${styles.devIcon} devicon-jest-plain`} 
              title="jest"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-bootstrap-plain`}
                title="Bootstrap"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-jquery-plain`}
                title="jQuery"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-eslint-original`}
                title="ESLint"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-codepen-plain`}
                title="Codepen"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-numpy-original`}
                title="Numpy"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-devicon-plain`}
                title="Devicon"
              ></i>
            </a>
          </div>
        </div>
      </section>
      {/* row 4 */}
      <section className="devicons container flex mx-auto pt-0 p-4 pb-16 animate-floating">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 mx-auto iconGrid">
        <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-photoshop-plain`}
                title="Photoshop"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i className={`${styles.devIcon} devicon-figma-plain`}
              title="Figma"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-inkscape-plain`}
                title="Inkscape"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-gimp-plain`}
                title="G.I.M.P"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-godot-plain`}
                title="Godot"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-raspberrypi-line`}
                title="Micro Python | Rpi"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-apple-original`}
                title="Apple | Unix"
              ></i>
            </a>
          </div>
          <div className="iconCell">
            <a href="https://github.com/Matt-Jones-Developer">
              <i
                className={`${styles.devIcon} devicon-filezilla-plain`}
                title="FileZilla"
              ></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Devicons;
