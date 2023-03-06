import ButtonLanding from './ButtonLanding';
import './styles/Landing.module.css'

function Landing() {
  return (
    <>
    <section className="landing-page bs-dark">
      <div className="top-title">
        {/* <span className="name">Matt Jones aka</span> */}
        <div className="top-text moveInLeft">
          <span className="dev-name">
            <pre>
              <code>[ glitchy ]</code>
            </pre>
          </span>
        </div>
        <hr />
      </div>
      <ButtonLanding />
      {/* <Button /> */}
      <div className="container">
        <hr />
        <span className="left moveInRight">Full</span>
        <div className="stack fadeIn" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>STACK</span>
          <span style={{ "--index": 1 }}>STACK</span>
          <span style={{ "--index": 2 }}>STACK</span>
        </div>
        <span className="right moveInRight">Developer</span>
      </div>
      <footer className="accredit">
        <p>
          Credit to Artist{" "}
          <a className="App-link" href="https://www.behance.net/gallery/20307439/G-I-M-K">
          FMK 
          </a>
          ...for the 3D animation.
        </p>
      </footer>
    </section>
    </>
  )
}

export default Landing;
