/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop/>
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss} n={0}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale" n={1}>Sale</NavLink>
            <NavLink href="/new" n={2}>New&nbsp;Releases</NavLink>
            <NavLink href="/men" n={3}>Men</NavLink>
            <NavLink href="/women" n={4}>Women</NavLink>
            <NavLink href="/kids" n={5}>Kids</NavLink>
            <NavLink href="/collections" n={6}>Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms" n={7}>Terms and Conditions</SubLink>
            <SubLink href="/privacy" n={8}>Privacy Policy</SubLink>
            <SubLink href="/contact" n={9}>Contact Us</SubLink>
          </Footer>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms both;
`

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  height: 100%;
  margin-right: calc(var(--overfill) * -1);
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {  
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
  animation: ${fadeIn} 600ms both;
  animation-delay: 400ms;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
  animation: ${fadeIn} 400ms both;
  animation-delay: calc(300ms + 105ms * ${p => p.n} - 5ms * ${p => p.n} * ${p => p.n});
  // animation-delay: calc(300ms + 200ms * ${p => p.n});
// 300 + 200
// 300 + 200 + 180
// 300 + 200 + 180 + 160
// 300 + 200 + 180 + 160 + 140
// 300 + (200 - 10(n - 1)) * n
// 300 + 200n - 10n^2 + 10n
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  animation: ${fadeIn} 400ms both;
  animation-delay: calc(500ms + 105ms * ${p => p.n} - 5ms * ${p => p.n} * ${p => p.n});
  // animation-delay: calc(500ms + 200ms * ${p => p.n});
`;

export default MobileMenu;
