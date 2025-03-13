import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../page/Store";

function ProfileEdit() {
  const navigate = useNavigate();
  const { ProfileImage } = useProfileStore();
  return (
    <>
      <div className="EditSection">
        <div>Profile</div>

        <div className="ProfilePicture">
          <img src={ProfileImage} alt="" />
        </div>
        <h4>Bentum Yaw Richmond</h4>
        <p>@BigBen</p>
        <p></p>
        <div
          className="BookNow"
          onClick={() => navigate("/editProfile-screen")}
        >
          Edit Profile
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
