import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

const Footer = () => {
  const d = new Date();
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
         <span style={{fontWeight: 600}}> Electro <span style={{color: 'red'}}>Spection</span> {d.getFullYear()}</span>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
