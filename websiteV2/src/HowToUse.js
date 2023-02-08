import styled from "styled-components";
import Header from "./Header";
import Foldery from "./Foldery.js";
import TestButton from "./TestButton.js"
import SideBar from "./SideBar.js"
import { MainContent, Title, MainText, Contain } from "./customStyles";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

const howToInfo = require("./HowToInfoArray.json")
const options = require("./HowToUseArray.json")




export default function HowToUse()
{
    let click = false;
    let button = null;

    const [finished, setFinished] = useState(false);

    function testFunc()
    {
        console.log("Yo!!")
    }

    function isRendered()
    {

    }

    const optionsScroll = (option) =>
    {
        console.log(document.getElementById(option).id + " Testing")

      

        document.getElementById(option).scrollIntoView({behavior:"smooth", alignToTop:"true"})
        
        
        if (button != null)
            button.style.fontWeight = ""
        
        button = document.getElementById(`${option + "button"}`)
        button.style.fontWeight = "700"

                        
    }

    const testCallback =  (option, entries) => {
        
        console.log(entries[0].intersectionRatio)
        if (entries[0].intersectionRatio < 1)
        {
            return
        }
        console.log(click)
        if (click)
            return

        if (button != null)
            button.style.fontWeight = "";
        
        button = document.getElementById(`${option + "button"}`)
        button.style.fontWeight = "700"
    }

    const HeaderContent = styled.div`
        background: #2C313D;
    `

    const MenuSelectBox = styled.div`
        
        display:flex;
        align-content: center;
    `
    const PageInfo = styled.div`
        flex-direction: column;
        display:flex;
        width: 80vw;
        height: 100%;
        align-items: center;
        margin: 2%;
        margin-bottom: 0;
        margin-top:0;
        overflow: auto;

        
    `

    const testing = useMemo (() => {
        if (finished)
        {
            return(
                <PageInfo id={"PageInfo"}>
                    <Foldery InfoSection={howToInfo.parsing} testCallback={testCallback} currTab={"Online"}/>
                        <div style={{marginBottom:"500px"}} />
                    <Foldery InfoSection={howToInfo.ShellInspector} testCallback={testCallback} currTab={"Online"} />
                </PageInfo>
            )
        }
    }, [finished])

    return (
        <Contain>
            <Header tab="How to Use"/>
            <HeaderContent>
                <Title>
                    How To Use
                </Title>
            </HeaderContent>
            <MainContent style={{display:"flex", flexDirection:"row", overflow:"hidden"}}>
                <MenuSelectBox>
                <SideBar scroll={optionsScroll} update={setFinished} button={button}/>
                        {testing}
                </MenuSelectBox>

            </MainContent>
        </Contain>
    );
}