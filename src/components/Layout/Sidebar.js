import logo200Image from 'assets/img/sidebar/sidebarIcon.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';

import { MdExitToApp } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { GiProcessor, GiBookshelf } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/', name: 'Process', exact: true, Icon: GiProcessor },
  { to: '/reports', name: 'Reports', exact: true, Icon: GiBookshelf },
  { to: '/keyInsights', name: 'Key Insights', exact: true, Icon: BiNews },
  { to: '/data', name: 'Data', exact: true, Icon: BsClipboardData },
];

const signOut = [
  { to: '/login', name: 'signout', exact: false, Icon: MdExitToApp },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
              <img
                src={logo200Image}
                width="60"
                height="40"
                className="pr-2"
                alt=""
              />
              <span className="text-white font-weight-bold">Electrospection</span>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            <Collapse isOpen={this.state.isOpenPages}>
              {signOut.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
