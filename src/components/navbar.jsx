import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue-950 text-white my-auto">
      <NavbarContent className="my-10">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 items-center my-10 justify-center text-white ml-64 mr-96" justify="center">
        <NavbarItem>
          <a className="text-white no-underline" href="#aboutme" onClick={(event) => handleClick(event, "aboutme")}>
            About Me
          </a>
        </NavbarItem>
        <NavbarItem isActive>
          <a className="text-white no-underline" href="#projects" onClick={(event) => handleClick(event, "projects")}>
            Projects
          </a>
        </NavbarItem>
        <NavbarItem>
          <a className="text-white no-underline" href="#contact" onClick={(event) => handleClick(event, "contact")}>
            Contact Me
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-primary text-foreground items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a href="#" onClick={(event) => handleClick(event, item)}>
              {item}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}