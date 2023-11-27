import "../styles/loginLayout.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  let username = localStorage.getItem("username") || "";
  const navigate = useNavigate();

  const handleLogout = () => {
    username = "";
    localStorage.setItem("username", JSON.stringify(username));
    navigate("/");
  };

  return (
    <div id="body-login">
      <div className="login-container">
        <div>
          <button
            type="button"
            onClick={handleLogout}
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
            Log out
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Logout;
