import { FooterData } from "./Data";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
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
