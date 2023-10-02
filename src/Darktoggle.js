import styled from 'styled-components'
import React from 'react';

function Darktoggle(props) {
  let colorRange = props.colorRange
 
  return (
    <Container>
      <p style={{color: colorRange.primaryFont}}>| Darkmode |</p>
      <Darkbutton onClick={props.toggleState} style={{background: colorRange.secondaryBackground}}>
      <p style={{color: colorRange.primaryFont}}>{props.darkToggle ? 'ON' : 'OFF'}</p>
      </Darkbutton>
    </Container>
  );
}
const Container = styled.div`

  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  width: 80%;
  
  @media only screen and (max-width: 700px) {
      justify-content: flex-start;
     width: 80%;
     font-size: 0.8em;
     
     
    }
  

`
const Darkbutton = styled.div`
cursor: pointer;
border-radius: 30px;
width: 20%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 2%;
height: 30px;

`



export default Darktoggle;