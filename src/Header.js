import Searchbar from "./Searchbar";
import TopHeader from "./TopHeader";
import styled from 'styled-components'
import React from 'react';


function Header(props) { 
  return (
      <>
        <Container style={{fontFamily: props.font}}>
            {/* top header (icon, font selector, nightmode selector) */}
            <TopHeader toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle} fontSelect={props.fontSelect}/>
            {/* bottom header (search function) */}
            <Searchbar searchInput={props.searchInput} searchTerm={props.searchTerm} />
            </Container>
    </>
  );
}

const Container = styled.div`

`

export default Header;