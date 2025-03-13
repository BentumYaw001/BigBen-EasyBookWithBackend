import { UserData } from "./Data";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="UpdateProfile">
        {UserData.map((item) => {
          return (
            <>
              <div className="ProfileDetails">
                <label htmlFor={item.label}> {item.label}</label>
                <input type={item.type} name="" id="" value={item.entry} />
              </div>
            </>
          );
        })}
        <div
          className="BookNow UpdatePage"
          onClick={() => navigate("/profile-screen")}
        >
          Update
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
