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
    { name: "ABOUT ME", link: "#aboutme" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "CONTACT ME", link: "#contact" },
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
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <Navbar className="bg-white my-auto">
      <NavbarContent className="my-10 flex justify-between items-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <NavbarItem>
          <a href="#home" className="text-blue-700 no-underline my-10">
            ANDREW KRASUSKI
          </a>
        </NavbarItem>

        <div className="ml-auto hidden sm:flex gap-4 items-center my-10 justify-center text-blue-700">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <a
                className="text-blue-700 no-underline"
                href={item.link}
                onClick={(event) => handleClick(event, item.link.slice(1))}
              >
                {item.name}
              </a>
            </NavbarItem>
          ))}
          <NavbarItem>
            <button
              className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(event) => handleClick(event, "contact")}
            >
              CONTACT ME
            </button>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen} className="bg-primary text-foreground items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <a
              className="text-white no-underline"
              href={item.link}
              onClick={(event) => {
                setIsMenuOpen(false);
                
              }}
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
