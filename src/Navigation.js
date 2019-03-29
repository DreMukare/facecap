import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function Navigation() {
  return (
    <Navbar color="dark">
      <NavbarBrand className="text-white">Class attendance</NavbarBrand>
      <Nav navbar className="ml-auto mr-4">
        <NavItem>
          <NavLink href="/" className="text-white">
            Log out
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
