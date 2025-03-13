import CountryDropdown from "../components/CountryCode";
import { SignUpData } from "../components/Data";
import angledDown from "/src/assets/images/down-filled.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <div className="SignUp">
        <p>Create an account</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {SignUpData.map((item, index) => {
            return (
              <>
                {index === 2 ? (
                  <>
                    <div className="">
                      <label htmlFor="Phone Number">Phone No.</label>
                      <div className="Phone">
                        <div className="Icons Prefix">
                          <CountryDropdown />
                        </div>

                        <div className="Icons Suffix">
                          <input
                            type="number"
                            name="suffix"
                            id=""
                            placeholder="552193214"
                            max="999999999"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor={item.name}>{item.label}</label>
                    <div className="Icons">
                      <img src={item.icon} alt="" />
                      <input
                        type={item.type}
                        name={item.name}
                        id={item.id}
                        placeholder={item.placeholder}
                        required
                      />
                    </div>
                  </>
                )}
              </>
            );
          })}
          <button onClick={() => navigate("/home-screen")}>SIGN UP</button>
        </form>
        <div className="LoginRedirect">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/signin-screen")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
