import { useNavigate } from "react-router-dom";
import ScreenTwoImage from "/src/assets/images/screentwo.png";
function ScreenTwo() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ScreenOne">
        <div className="Content">
          <img src={ScreenTwoImage} alt="" />
          <h4>Book Anytime, AnyWhere.</h4>
          <div className="Dots">
            <p>.</p>
            <span>.</span> <p>.</p>
          </div>
          <button onClick={() => navigate("/third-screen")}>Next</button>
        </div>
      </div>
    </>
  );
}

export default ScreenTwo;
