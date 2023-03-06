import { useNavigate } from 'react-router-dom';
import "./styles/ButtonLanding.module.css";

const ButtonLanding = ({ history }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("test button")
    navigate("/home");
  };

  return (
      <button className="image-container fadeIn" onClick={handleClick}>
      </button>
  );
};

export default ButtonLanding;
