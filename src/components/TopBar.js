import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const TopBar = () => {
  return (
    <Navbar color="success">
      <NavbarBrand className="text-warning font-weight-bold">Deere & Co. Pizza</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink href="https://github.com/EdTriplett/JD_pizzaTest" className="text-primary font-italic">
            Github
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
