import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../firebase.config/Email.Auth";
import { SignUpData } from "../components/Data";
import CountryDropdown from "../components/CountryCode";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { user, error } = await signUpUser(formData.email, formData.password);
    if (error) {
      setError(error);
      return;
    }

    console.log("User created:", user);
    navigate("/home-screen");
  };

  return (
    <div className="SignUp">
      <p>Create an account</p>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        {SignUpData.map((item, index) => (
          <div key={index}>
            {index === 2 ? (
              <div>
                <label htmlFor="Phone Number">Phone No.</label>
                <div className="Phone">
                  <div className="Icons Prefix">
                    {/* <CountryDropdown /> */}
                  </div>
                  <div className="Icons Suffix">
                    <input
                      type="number"
                      name="phone"
                      placeholder="552193214"
                      max="999999999"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor={item.name}>{item.label}</label>
                <div className="Icons">
                  <img src={item.icon} alt="" />
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    required
                    value={formData[item.name]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        <button type="submit">SIGN UP</button>
      </form>

      <div className="LoginRedirect">
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/signin-screen")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
