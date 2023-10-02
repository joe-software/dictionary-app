import styled from 'styled-components'
import Darktoggle from './Darktoggle';
import React from 'react';

function TopHeader(props) {
 
  return (
    <Container>
        {/* icon */}
        

        {/* font selector */}
        
        <div className='fontContainer'>
            <p>| Font Select | </p>
        <p style={{fontFamily: 'Open Sans'}} onClick={props.fontSelect}>Open Sans</p>
            {/* font-family: 'Open Sans', sans-serif; */}
        <p style={{fontFamily: 'Raleway'}} onClick={props.fontSelect}>Raleway</p>
            {/* font-family: 'Raleway', sans-serif; */}
        <p style={{fontFamily: 'Ubuntu'}} onClick={props.fontSelect}>Ubuntu</p>
            {/* font-family: 'Ubuntu', sans-serif; */}
        </div>

        {/* darkmode selector */}   
        <Darktoggle toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle}/>  
    </Container>
  );
}
const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
@media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

.fontContainer{
    margin: 1%;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10%;
    border-radius: 30px;
    
    @media only screen and (max-width: 700px) {
        justify-content: flex-start;
       width: 80%;
       font-size: 0.8em;          
       
      }
    p{
        padding-right: 2%;
        cursor: pointer;
    }
}

`



export default TopHeader;