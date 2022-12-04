import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // outline: 2px solid blue;
    width: 95%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 17px;
    background-color: #EEEEEE;
    border-radius: 8px;
    

`
const LogoContainer = styled.div`
    outline: 2px solid red;
    width: 13%;
    height: 80%;
    display: flex;
    flex-direction: column;
    

`
const Logo = styled.div`
    outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`
const Fav = styled.div`
    outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`

const InfoContainer = styled.div`
    outline: 2px solid yellow;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;

`
const AccountNameContainer = styled.div`
    outline: 2px solid pink;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;

`
const AccountDetailsContainer = styled.div`
    outline: 2px solid blue;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

`
const UserNameContainer = styled.div`

`
const PasswordContainer = styled.div`

`
const VisibilityContainer = styled.div`

`
const ActionContainer = styled.div`
    outline: 2px solid blue;
    width: 10%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

`
const EditContainer = styled.div`
     outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`
const DeleteContainer = styled.div`
     outline: 2px solid red;
    width: 100%;
    height: 50%;
    display: flex;

`


function Password() {
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>Logo</Logo>
            <Fav>Fav Status</Fav>
        </LogoContainer>
        <InfoContainer>
            <AccountNameContainer>
                Account Name
                <UserNameContainer>UserName</UserNameContainer>
            </AccountNameContainer>
            
            <AccountDetailsContainer>
                <PasswordContainer>Password</PasswordContainer>
                <VisibilityContainer>Eye</VisibilityContainer>
            </AccountDetailsContainer>
        </InfoContainer>
        <ActionContainer>
            <EditContainer>Edit</EditContainer>
            <DeleteContainer>Delete</DeleteContainer>  
        </ActionContainer>
    </Wrapper>

    
  )
}

export default Password