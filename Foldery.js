import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import logo from "./seeshellsLogo-flipped.png";

const howToInfo = require("./HowToInfoArray.json")

export default function Foldery ({InfoSection, currTab, testCallback})
{
    let currButton = null;

    const [selected, setSelected] = useState(currTab);

    let obsOptions = {
        root: document.querySelector("#PageInfo"),
        threshold: 1
    }

    let shouldBold = true;

    const InfoBox = styled.div`
        flex-direction: column;
        display:flex;
        justify-content:center;
        width: 80%;
        margin-bottom:200px;
    `
    const InfoTabBox = styled.div`
        
        display:flex;
        align: center;
        justify-content:center;
        width: 90%;
        background: #2C313D;
        border-radius: 0 10px 10px 10px;
        height: fit-content;
        flex-direction: column;
    `
    const HowToTitle = styled.div`
        font-family: IBM Plex Sans Condensed;
        font-size: 30pt;
        font-weight: bold;
        margin: 2px;
        margin-bottom:5px;
    `

    const TabTitle = styled.div`
        font-family: IBM Plex Sans Condensed;
        font-size: 20pt;
        margin: 3%;
    `

    const Definition = styled.div`
        font-family: IBM Plex Sans Condensed;
        font-size: 12pt;
        margin: 3%;
    `
    const ToStatement = styled.div`
        font-family: IBM Plex Sans Condensed;
        font-size: 15pt;
        font-weight: bold;
        margin: 3%;
    `
    const StepDiv = styled.div`
        font-family: IBM Plex Sans Condensed;
        font-size: 13pt;
        margin: 3%;

    `
    const Type = styled.div`
        background: #2C313D;
        border-radius: 20px 20px 0 0;
        height:5vh;
        width:200px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        white-space: pre;
        font-family: "Jost";
        &:hover {
            cursor: pointer;
        };
        
    `

    const Tabs = styled.div`
        display: flex;
        flex-direction: row;
    `

    function update(Tab)
    {
        setSelected(Tab);
    }

    useEffect(() => {
        let test =  new IntersectionObserver((entries) => testCallback(InfoSection.title, entries), obsOptions)
        let element = document.getElementById(InfoSection.title)
        console.log(element)
        test.observe(element)
    }, [selected]);

    return (                          
        <InfoBox id={`${InfoSection.title}`}>
            <HowToTitle>
                {InfoSection.title}
            </HowToTitle>
            <Tabs>
                {InfoSection.tabNames.map((Tab) => {
                    console.log(InfoSection.tabs[selected].title == Tab)
                    return(
                        <Type style={{background: (InfoSection.tabs[selected].title == Tab) ? "" : "#474E60"}} onClick={() => update(Tab)}>
                            {Tab}
                        </Type>
                    )
                })}
            </Tabs>
            <InfoTabBox>
                <div>
                    <TabTitle>
                        {InfoSection.tabs[selected].title}
                    </TabTitle>
                    <Definition>
                        {InfoSection.tabs[selected].definition }
                    </Definition>
                    <ToStatement>
                        {InfoSection.tabs[selected].toStatement}
                    </ToStatement>
                    
                    {InfoSection.tabs[selected].steps.map((Step, Index) => {
                        return (
                            <StepDiv>
                                Step {Index + 1}: {Step}
                            </StepDiv>
                            )
                    })} 
                </div>  
            </InfoTabBox>
        </InfoBox>
    )
}