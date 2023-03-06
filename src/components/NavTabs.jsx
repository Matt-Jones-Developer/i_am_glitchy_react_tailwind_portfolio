import { NavLink } from 'react-router-dom';
import myCV from "../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf"

function NavTabs() {
  return (
    <>
      <NavLink
        to="home"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        // style={{ marginRight: ".3rem" }}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        // style={{ marginRight: ".3rem" }}
      >
        About
      </NavLink>
      <NavLink
        to="projects"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        // style={{ marginRight: ".3rem" }}
      >
        Projects
      </NavLink>
      <NavLink
        to="contact"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        // style={{ marginRight: ".3rem" }}
      >
        Contact
      </NavLink>
      <NavLink
        to="cv"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={() => {
          window.open(`${myCV}`, "_blank")
        }}
        rel="noreferrer"
        style={{ marginRight: "1rem" }}
      >
        CV
      </NavLink>

    </>
  );
}

export default NavTabs;