import React from 'react';
import Main from '../features/Main';
import NavBar from '../features/NavBar';
import SideBar from '../features/SideBar';
import AddPassword from '../features/AddPassword';
import styled from 'styled-components';
import bgImg from '../images/bg.png';
import { useEffect } from 'react';
import axios from 'axios';

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
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  
  
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
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:5500/api/user/accounts/63789382cf03d9b2522a8345/all");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [])
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