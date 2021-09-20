import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <Display>Sale</Display>
            <Reveal>Sale</Reveal>
          </NavLink>
          <NavLink href="/new">
            <Display>New&nbsp;Releases</Display>
            <Reveal>New&nbsp;Releases</Reveal>
          </NavLink>
          <NavLink href="/men">
            <Display>Men</Display>
            <Reveal>Men</Reveal>
          </NavLink>
          <NavLink href="/women">
            <Display>Women</Display>
            <Reveal>Women</Reveal>
          </NavLink>
          <NavLink href="/kids">
            <Display>Kids</Display>
            <Reveal>Kids</Reveal>
          </NavLink>
          <NavLink href="/collections">
            <Display>Collections</Display>
            <Reveal>Collections</Reveal>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 0 4px;
  // animation: Display & Reveal moving vertically
  overflow: hidden;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  // set for the link clicking box
  color: var(--color-gray-900);
  &:first-of-type {
    color: var(--color-secondary);
  }
  
  // border: 1px solid;
`;

const Text = styled.span`
  display: block;
  transform: var(--translate-from);
  transition: transform 500ms;
  will-change: transform;
  @media (prefers-reduced-motion: no-preference) {  
    ${NavLink}:hover & {
      transform: var(--translate-to);
      transition: transform 250ms;
    }
  }

`

const Display = styled(Text)`
  --translate-from: translateY(0%);
  --translate-to: translateY(-100%);
`

const Reveal = styled(Text)`
  position: absolute;
  top: 0;
  left: 4px;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold}; 
  --translate-from: translateY(100%);
  --translate-to: translateY(0%);
`

export default Header;
