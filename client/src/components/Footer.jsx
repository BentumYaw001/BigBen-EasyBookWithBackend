import { FooterData } from "./Data";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  // const clearUser = useAuthStore((state) => state.clearUser);

  // const handleLogout = () => {
  //   auth.signOut();
  //   cookies.remove("auth-tokens");
  //   clearUser();
  //   navigate("/login");
  // };

  return (
    <>
      <footer>
        {FooterData.map((item, index) => {
          return (
            <>
              <div
                className="FooterMenu"
                onClick={() => {
                  {
                    {
                      index === 4 ? navigate("/profile-screen") : "";
                    }
                  }
                }}
              >
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </>
          );
        })}
      </footer>
    </>
  );
}

export default Footer;
