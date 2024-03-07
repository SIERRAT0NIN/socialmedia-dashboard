import { Navbar, NavbarBrand } from "@nextui-org/react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white justify-center flex">
      <div className="m-5 text-black">
        <Navbar shouldHideOnScroll>
          <NavbarBrand className="great-vibes-regular text-7xl">
            Alberto Sierra
          </NavbarBrand>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
