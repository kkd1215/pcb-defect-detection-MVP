import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

const Footer = () => {
  const d = new Date();
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
         <span style={{fontWeight: 600}}> Electro<span style={{color: 'red'}}>spection</span> {d.getFullYear()}</span>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
