import * as React from 'react';

import {
  Logo,
  LogoLink,
  NavItems,
  NavItem,
  NavControls,
  MobileMenuIcon,
  MobileMenu,
  CloseIcon,
  MobileLogo,
  MobileMenuItem,
  SearchBox,
  UniversalLink,
  UserNavBarProps,
} from 'RedocLy';

const logo = require('../content/images/logo.svg');

export class UserNavBar extends React.Component<UserNavBarProps> {
  render() {
    const { items = [], isMobileMenuOpened, onToggleMobileMenu, onHideMobileMenu } = this.props;

    return (
      <React.Fragment>
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
        <NavItems>
          {items.map((navItem, index) => (
            <NavItem active={navItem.active} key={index}>
              <UniversalLink to={navItem.link}>{navItem.title}</UniversalLink>
            </NavItem>
          ))}
        </NavItems>
        <NavControls>
          <SearchBox />
          <MobileMenuIcon onClick={onToggleMobileMenu} />
        </NavControls>
        <MobileMenu isShown={isMobileMenuOpened}>
          <CloseIcon onClick={onHideMobileMenu} />
          <UniversalLink to="/">
            <MobileLogo src={logo} />
          </UniversalLink>
          {items.map((navItem, index) => (
            <MobileMenuItem key={`mobile-menu-${index}`} active={navItem.active}>
              <UniversalLink to={navItem.link}>{navItem.title}</UniversalLink>
            </MobileMenuItem>
          ))}
        </MobileMenu>
      </React.Fragment>
    );
  }
}
