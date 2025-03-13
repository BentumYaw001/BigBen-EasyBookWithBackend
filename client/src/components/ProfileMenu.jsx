import Arrow from "/src/assets/images/angleright.svg";
import { ProfileMenuData } from "./Data";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ProfileCatalogue">
        {ProfileMenuData.map((item) => {
          return (
            <>
              <div onClick={() => navigate(item.route)}>
                <div className="ProfileMenu">
                  <div className="ProfileMenuItem">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                  <img src={Arrow} alt="Arrow" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProfileMenu;
