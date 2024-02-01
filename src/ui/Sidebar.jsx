import styled, { css } from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
// import { Uploader } from '../data/Uploader';
import { useContext } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { DarkModeContext } from '../context/DarkModeContext';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 840px) {
    display: none;
  }
`;

const navHeightOptions = {
  full: css`
    height: 100dvh;
    border-right: 1px solid var(--color-grey-100);
    z-index: 99;
    width: 25dvw;
    animation: slideIn 0.5s linear;

    @keyframes slideIn {
      0% {
        transform: translate(-100px, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `,
  zero: css``,
};

const StyledMobileMenu = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.5rem 0 0 1.8rem;
  gap: 3.2rem;
  display: none;
  position: absolute;
  ${(props) => navHeightOptions[props.navHeight]}

  @media (max-width: 52.5em) {
    display: inline-block;
  }
  @media (max-width: 45em) {
    width: 40dvw;
  }
`;

function Sidebar() {
  const {isNavOpen, setIsNavOpen} = useContext(DarkModeContext);

  return (
    <>
      <StyledSidebar>
        <Logo />
        <MainNav />
        {/* <Uploader /> */}
      </StyledSidebar>

      <StyledMobileMenu navHeight={isNavOpen ? 'full' : 'zero'}>
        <ButtonIcon
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <HiXMark /> : <HiBars3 />}
        </ButtonIcon>
        {isNavOpen ? (
          <>
            <Logo />
            <MainNav />
          </>
        ) : (
          ''
        )}
      </StyledMobileMenu>
    </>
  );
}

export default Sidebar;
