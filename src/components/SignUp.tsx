import "../styles/loginLayout.css";
import { Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Login() {
  let username = localStorage.getItem("username") || "";
  const navigate = useNavigate();

  const handleAuth = () => {
    username = username.replace(/['"]+/g, "");
    localStorage.setItem("username", JSON.stringify(username));
    navigate("/");
  };

  return (
    <div id="body-login">
      <div className="login-container">
        <div>
          <h2 className="login-text">Create a new account</h2>
          <form>
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => (username = event.target.value)}
            />

            
            <label>Password:</label>
            <input type="password" />
            

            <label>Confirm Password:</label>
            
            <input type="password" />

            <button
              type="button"
              onClick={handleAuth}
              style={{
                backgroundColor: "#426c55",
                borderColor: "#426c55",
                marginTop: "20px",
                width: "100px",
                height: "40px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Sign Up
            </button>
            <span style={{ marginTop: "5px", marginBottom: "5px" }}>or</span>
            <button
              type="button"
              style={{
                backgroundColor: "#426c55",
                borderColor: "#426c55",
                width: "100px",
                height: "40px",
              }}
            >
              <Link
                href="/login"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Sign In
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
