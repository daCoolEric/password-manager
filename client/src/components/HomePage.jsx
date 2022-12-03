import React from 'react';
import Main from '../features/Main';
import NavBar from '../features/NavBar';
import SideBar from '../features/SideBar';
import AddPassword from '../features/AddPassword';
import styled from 'styled-components';
import bgImg from '../images/bg.png';

const Wrapper = styled.div`
  outline: 2px solid blue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url(${bgImg});
  background-size: 100% 100vh;
`
const SideBarContainer = styled.div`
  // outline: 2px solid red;
  width: 20%;
  height: 100%;
  background: none;



`
const NavBarContainer = styled.div`
  // outline: 2px solid red;
  height: 7%;
  
  
`
const MainBarContainer = styled.div`
  // outline: 2px solid blue;
  width: 85%;
  background-color: #fff;

`
const MainContainer = styled.div`
  outline: 2px solid red;
  height: 93%;

`

function HomePage() {
  return (
    <Wrapper>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <MainBarContainer>
          <NavBarContainer>
            <NavBar />
          </NavBarContainer>
          <MainContainer>
            <Main />
            <AddPassword />
          </MainContainer>
        </MainBarContainer>
    </Wrapper>
  )
}

export default HomePage