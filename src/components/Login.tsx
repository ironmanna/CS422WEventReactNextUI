import "../styles/loginLayout.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let username = localStorage.getItem("username") || "";
  const navigate = useNavigate();

  const handleAuth = () => {
    username = username.replace(/['"]+/g, "");
    localStorage.setItem("username", JSON.stringify(username));
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div id="body-login">
      <div className="login-container">
        <div>
          <h2 className="login-text">Login</h2>
          <form>
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => (username = event.target.value)}
            />
            <br />
            <label>Password:</label>
            <input type="password" />
            <button
              type="button"
              onClick={handleAuth}
              style={{
                backgroundColor: "#426c55",
                borderColor: "#426c55",
                marginTop: "10px",
                width: "100px",
                height: "40px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Sign In
            </button>
            <br />
            <span style={{ marginTop: "5px", marginBottom: "5px" }}>or</span>
            <button
              type="button"
              onClick={goToSignUp}
              style={{
                backgroundColor: "#426c55",
                borderColor: "#426c55",
                marginTop: "10px",
                width: "100px",
                height: "40px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
