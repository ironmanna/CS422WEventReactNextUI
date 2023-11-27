import "../styles/mainLayout.css";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ProfileLogo } from "./ProfileLogo.tsx";

interface TopNavbarProps {
  id: number;
}

function TopNavbar({ id }: TopNavbarProps) {
  let username = localStorage.getItem("username")?.replace(/['"]+/g, "") || "";

  return (
    <>
      <Navbar maxWidth="full">
        <NavbarItem>
          <Link
            href="/"
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
              href="/likedEvents"
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
            <Link style={{color: "#000000"}} href={username !== "" ? "/logout" : "/login"}>
              {username != "" ? `Hi ${username}!` : "Login"}
              <ProfileLogo />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default TopNavbar;
