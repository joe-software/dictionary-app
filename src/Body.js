import styled from 'styled-components'
import React from 'react';




function Body(props) {
  console.log(props)
  let dictData = props.dictData
  let defArr = []
   if(props.dictData){
    // processing the definitions loop and display
  let loopLen = 0
  let defLen = dictData.meanings[0]['definitions'].length
  defLen > 3 ? loopLen = 3 : loopLen = defLen
  for(let i = 0; i < loopLen; i++){
    defArr.push(i)
  }
}
  if(dictData == false){
    return (
      <Container style={{fontFamily: props.font, color: props.colorRange.primaryFont}}> 
      <p>Search not found, please try to search again in the search bar above</p>
      </Container>
    )} else {
  return (
                
        <Container style={{fontFamily: props.font, color: props.colorRange.primaryFont, background: props.colorRange.background}}>

        <div className='wordDisplay'>
        <h1>{dictData.word}</h1>
        <p className='italics'>{dictData.phonetic}</p>
        </div>

        {dictData.meanings.map((item, j) => {          
          return (
            <div>
              <div className='lineBreak'></div>
          <FieldContainer>
          <span>Part of Speech:</span><p>{dictData.meanings[j]['partOfSpeech']}</p>
          </FieldContainer>
  
          <FieldContainer className='definitionRow'>
          <span>Definition:</span> 
          <div className='definitionContainer'>
          {dictData.meanings[j]['definitions'].map((item, i) => {
            if(i < 3){
            return(
              <p>&#x2022; {item['definition']}</p>
            )
            }
          })}  
          </div>             
          </FieldContainer>
        
            </div>
          )
        })}

                 
        </Container>
    
  );
  } 
  }
 


export default Body;

const Container = styled.div`
padding-left: 5%;
.lineBreak{
  border-top: 2px solid black;
  height: 2px;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.wordDisplay{
  display: flex;
  flex-direction: column;
}
`

const FieldContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
h1{
  
}
p{
  margin-top: 0%;
}
span{
  font-weight: bold;
  width: 15%;
  margin-top: 0%;
}
.italics{
  font-style: italic;
}

.definitionContainer{
  display: flex;
  flex-direction: column;
}

`