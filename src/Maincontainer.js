import Header from "./Header";
import Body from "./Body";
import React, { useEffect, useState } from 'react';

function MainContainer() {
    // state used to toggle darkmode on and off
    const[darkToggle, setDarkToggle] = useState(false)
    // state used to indicate the colours for darkmode/lightmode
    const[colorRange, setColorRange] = useState('')
    // state used for the search word as the user types
    const[searchTerm, setSearchTerm] = useState('help')
    // state used as the dictionary data from the API - if empty or errir it reverts to false to prevent an error when it reaches the props in components
    const[dictData, setDictData] = useState(false)
    // state holds the selected font value which is then passed to props
    const[font, setFont] = useState('Open Sans')
    function toggleState(){
        setDarkToggle(!darkToggle)
    }

    //function to handle the search input
    function searchInput(e){
        let searchValue = e.target.value
        // if the API recieves an empty string it throws an error so the below if statement prevents the possibility of an empty string value
        if(searchValue == ''){
            searchValue = "-"
        }
        setSearchTerm(searchValue)
    }

    //function to select font
    function fontSelect(e){
        setFont(e.target.outerText)
        }

    //below effect changes the colour mapping object dependant upon the change of dark toggle
    useEffect(() => {
        if(darkToggle){
            setColorRange({secondaryBackground: 'grey', background:'#3F2E3E', primaryFont: '#EFE1D1'})
        } else {
            setColorRange({secondaryBackground: '#B9B4C7', background:'#EFE1D1', primaryFont: '#19747E'})
        }
    }, [darkToggle])

    // inital API fetch
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(res => res.json())
            .then(data =>{
                if(data.title){
                    setDictData(false)
                } else {
                    setDictData(data[0])
                }
            })
    }, [])

    // API fetch dependant upon the search state changing
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(res => res.json())
        .then(data =>{
            if(data.title){
                setDictData(false)
            } else {
                setDictData(data[0])
            }
        })
    }, [searchTerm])
    
    
      return (
        <div style={{fontFamily: font, color: colorRange.primaryFont, background: colorRange.background, height: '100vh'}}>
             {/* container for nav and search (header) */}
             <Header toggleState={toggleState} darkToggle={darkToggle} colorRange={colorRange} searchInput={searchInput} font={font} fontSelect={fontSelect}/>         
             {/* container for definitions (body) */}
             <Body dictData={dictData} searchTerm={searchTerm} font={font} colorRange={colorRange}/>  
        </div>
      );
    }
    
    export default MainContainer;