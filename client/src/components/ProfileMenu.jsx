import Arrow from "/src/assets/images/angleright.svg";
import { ProfileMenuData } from "./Data";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../page/Store";

function ProfileMenu() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  return (
    <>
      <div className="ProfileCatalogue">
        {ProfileMenuData.map((item) => (
          <div
            key={item.name}
            onClick={() => {
              if (item.route === "/signin-screen") {
                logout();
                navigate("/signin-screen");
              } else {
                navigate(item.route);
              }
            }}
          >
            <div className="ProfileMenu">
              <div className="ProfileMenuItem">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProfileMenu;
