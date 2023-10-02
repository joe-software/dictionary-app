import React from 'react';
import styled from 'styled-components'


function Searchbar(props) {
 
  return (
      <Container>
        <input type="text" onChange={props.searchInput} value={props.searchTerm} placeholder='Search...'></input>
      </Container>
  );
}

export default Searchbar;

const Container = styled.div`
display: flex;
input{
    width: 80%;
    margin: auto;
    font-size: 35px;
    border-radius: 35px;
    padding-left: 2%;
}


`