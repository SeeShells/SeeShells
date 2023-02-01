import styled from "styled-components";
import Header from "./Header";
import logo from "./seeshellsLogo-flipped.png";
import { MainContent, Title, MainText, Contain } from "./customStyles";
import { howToInfo } from "./HowToInfoArray";

const options = require("./HowToUseArray.json")



export default function HowToUse()
{
    const HeaderContent = styled.div`
        background: #2C313D;
    `

    const MenuSelectBox = styled.div`
        
        display:flex;
        align-content: flex-start;
    `
    const SideBar = styled.div`
        flex-direction:column;
        display:flex;
        width: 15%;
        height: 100%;
        background: #2C313D;
    `
    const optionButtons = styled.div`
        text-align:left;
        font-size: 15pt;
    `
    const PageInfo = styled.div`
        flex-direction: column;
        display:flex;
        width: 85%;

        justify-content: center;
        margin: 2%;
    `
    const InfoBox = styled.div`
        flex-direction: column;
        display:flex;
        align: center
        justify-content:center;
        width: 70%;
        height: fit-content;
        
    `
    const InfoTabBox = styled.div`
        
        display:flex;
        align: center;
        justify-content:center;
        width: 90%;
        background: #2C313D;
        border-radius: 10px;
        height: fit-content;
        flex-direction: column;
    `
    const HowToTitle = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 30pt;
        font-weight: bold;
        margin: 2px;
    `

    const TabTitle = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 20pt;
        margin: 3%;
    `

    const Definition = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 12pt;
        margin: 3%;
    `
    const ToStatement = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 15pt;
        font-weight: bold;
        margin: 3%;
    `
    const StepDiv = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 13pt;
        margin: 3%;

    `

    return (
        <Contain>
            <Header tab="How to Use" />
            <HeaderContent>
                <Title>
                    How To Use
                </Title>
            </HeaderContent>
            <MainContent>
                <MenuSelectBox>
                    <SideBar>
                        {options.options.map((option) => {
                            return (
                                <div style={{ textAlign: "left", fontSize: "15pt", marginLeft: "10%", marginBottom: "15pt"}}>
                                    {option}
                                </div>   
                            )     
                        })}
                    </SideBar>
                    <PageInfo>
                        {howToInfo.map((InfoSection) => {
                            return (
                                <InfoBox>
                                    <HowToTitle>
                                        {InfoSection.title}
                                    </HowToTitle>
                                    <InfoTabBox>
                                        {InfoSection.tabs.map((Tab) => {
                                            return (
                                                <div>
                                                    <TabTitle>
                                                        {Tab.title}
                                                    </TabTitle>
                                                    <Definition>
                                                        {Tab.definition }
                                                    </Definition>
                                                    <ToStatement>
                                                        {Tab.toStatement}
                                                    </ToStatement>
                                                    
                                                    {Tab.steps.map((Step, Index) => {
                                                        return (
                                                            <StepDiv>
                                                                Step {Index + 1}: {Step}
                                                            </StepDiv>
                                                            )
                                                    })}
                                                    
                                    
                                                </div>  
                                            )
                                        })}
                                    </InfoTabBox>
                                </InfoBox>
                            )
                        })}

                    </PageInfo>
                </MenuSelectBox>

            </MainContent>
        </Contain>
    );
}