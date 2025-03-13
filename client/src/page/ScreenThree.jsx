import { useNavigate } from "react-router-dom";
import ScreenThreeImage from "/src/assets/images/screenthree.png";
function ScreenThree() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ScreenOne">
        <div className="Content">
          <img src={ScreenThreeImage} alt="" />
          <h4>Relax, We've Got You Covered!</h4>
          <div className="Dots">
            <p>.</p>
            <p>.</p>
            <span>.</span>
          </div>
          <button onClick={() => navigate("/signup-screen")}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default ScreenThree;
