import { useNavigate } from "react-router-dom";
import ScreenOneImage from "/src/assets/images/screenone.png";

function ScreenOne() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ScreenOne">
        <div className="Content">
          <img src={ScreenOneImage} alt="" />
          <h4>Discover Beauty Services Near You!</h4>
          <div className="Dots">
            <span>.</span> <p>.</p>
            <p>.</p>
          </div>
          <button onClick={() => navigate("/second-screen")}>Next</button>
        </div>
      </div>
    </>
  );
}

export default ScreenOne;
