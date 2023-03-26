import { NavLink } from 'react-router-dom';
import myCV from "../assets/pdf/Matt_Jones_CV_2023.pdf";

function NavTabs() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="skills"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="projects"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="contact"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
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
          window.location.reload();
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