import "../styles/mainLayout.css";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ProfileLogo } from "./ProfileLogo.tsx";

interface TopNavbarProps {
  id: number;
}

function TopNavbar({ id }: TopNavbarProps) {
  let username = localStorage.getItem("username")?.replace(/['"]+/g, "") || "";

  const handleClickProfile = () => {
    if (username != "") {
      window.location.href = "/logout";
    } else {
      window.location.href = "/login";
    }
  };

  const handleClickLikedEvents = () => {
    window.location.href = "/likedEvents";
  };

  const handleClickHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Navbar maxWidth="full">
        <NavbarItem>
          <Link
            onClick={handleClickHome}
            style={
              id === 1
                ? { color: "#426c55", fontSize: "20px", marginRight: "20px" }
                : { color: "#000000", fontSize: "20px", marginRight: "20px" }
            }
          >
            WEvent
          </Link>
        </NavbarItem>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarItem>
            <Link
              onClick={handleClickLikedEvents}
              style={
                id === 2
                  ? { color: "#426c55", fontSize: "20px" }
                  : { color: "#000000", fontSize: "20px" }
              }
            >
              Liked Events
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <NavbarItem>
            {username != "" ? `Hi ${username}!` : "Login here ->"}
          </NavbarItem>
          <NavbarItem>
            <Link onClick={handleClickProfile}>
              <ProfileLogo />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default TopNavbar;
