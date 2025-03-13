import StoreImage from "/src/assets/images/specialist/modern-beauty-salon-interior.png";
import LoveImage from "/src/assets/images/Love.svg";
import ShareImage from "/src/assets/images/share.svg";
import BackImage from "/src/assets/images/arrowleft.svg";
import star from "/src/assets/images/star.svg";
import { useNavigate } from "react-router-dom";

function SpaIntro() {
  const navigate = useNavigate();

  return (
    <>
      <div className="SpaIntro">
        <div className="SpaRating">
          <img
            src={BackImage}
            alt=""
            className="SpaCommons Left"
            onClick={() => navigate("/home-screen")}
          />
          <img src={StoreImage} alt="" className="StoreImage" />
          <img src={ShareImage} alt="" className="SpaCommons Rights" />
          <img src={LoveImage} alt="" className="SpaCommons Right" />
        </div>
        <div className="BookNow SpaReview">
          <img src={star} alt="" />
          <p>3.0 ( 1.0k + Review ) </p>
        </div>
      </div>
      <div className="SpaName">
        <h2>Yanks Spa and Salon</h2>
        <p>Haircuts, Makeup, Massage, Shaving</p>
      </div>
    </>
  );
}

export default SpaIntro;
