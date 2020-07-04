import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';
import devices from 'assets/devices';

const Nav = styled.nav`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
  margin: 0 auto;

  grid-template-columns: 100px 1fr 120px;
  grid-template-rows: 1fr;

  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }

  @media ${devices.tablet} {
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 90px;

    padding: 1.5rem 0;
    width: 90%;
  }
`;

const LogoImage = styled.img`
  height: 2.3rem;
  margin: auto 0;

  cursor: pointer;

  @media ${devices.tablet} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const MenuList = styled.ul`
  flex: 1;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 0;
  padding: 0;

  @media ${devices.tablet} {
    grid-column: 1/3;
    grid-row: 2;
  }
`;

const MenuListItem = styled.li`
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;

  text-align: center;
  word-break: keep-all;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 2rem;

    @media ${devices.tablet} {
      margin-right: 0.5rem;
    }
  }

  border-bottom: 3px solid transparent;
  transition: all 0.2s;

  cursor: pointer;

  &.current {
    border-bottom: 3px solid ${colors.main};
    color: ${colors.main};
  }
  

  @media ${devices.tablet} {
    padding: 0.5rem 1rem;
  }
`;

const Profile = styled.div`
  text-align: right;
  font-weight: bold;

  @media ${devices.tablet} {
    grid-column: 2;
    grid-row: 1;
  }
`;

function NavBar() {
  return (
    <Nav>
      <LogoImage src="/council-logo-small.svg" />
      <MenuList>
        <MenuListItem className="current">분야별 청원</MenuListItem>
        <MenuListItem>추천순 청원</MenuListItem>
        <MenuListItem>답변된 청원</MenuListItem>
      </MenuList>
      <Profile>
        1376 홍길동
      </Profile>
    </Nav>
  );
}

export default NavBar;
