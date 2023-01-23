import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import logo from "./seeshellsLogo-flipped.png";
import { useNavigate } from "react-router-dom";

const tabs = require("./tabs.json")



export default function Header(props) 
{

    const HeaderBar = styled.div`
    display: flex;
    width: 100vw;
    background: #2C313D;
    height: "10vh";
    color: #FFFBF0;
    font-family: "IBM Plex Sans Condensed";
  `

    const HeaderContent = styled.div`
        padding-left: .75vh;
        padding-right: .75vh;
        display: flex;
        height: 9.25vh;
        align-items: center;
        width: 100vw;
        justify-content: space-between;
    `

    const Logo = styled.div`
        margin-left: 15px;
        margin-top: 20px;
    `
    const Download = styled.div`
        background: #1C1E23;
        font-size: 20px;
        border-radius: 40px;
        width: 120px;
        margin-left: 15px;
        text-align: center;
        font-weight: bold;
        padding:5px;
    `

    const HomeButton = styled.div`
        &:hover {
            cursor: pointer;
        };
        display: flex;
    `

    const navigation = useNavigate();


    function about()
    {
        if (props.tab != "About")
        {
            return(
                <div style={{display:"flex", flexDirection: "row", alignItems:"center"}}>
                    <HomeButton onClick={() => {navigation("/")}}>
                        <h1 style={{fontSize: 35}}>
                        SeeShells
                        </h1>
                        <Logo>
                            <img src={logo} width={"50vw"} height={"50vh"}/>
                        </Logo>
                    </HomeButton>
                    <Download>
                        Download
                    </Download>
                </div>
            )
        }
        else
        {
            return(
                <div style={{display:"flex", flexDirection: "row", alignItems:"center"}}> 
                    <h1 style={{fontSize: 35}}>
                    SeeShells
                    </h1>
                </div>
            )
        }
    }

  return (
    <HeaderBar>
      <HeaderContent>
       {about()}
        <div style={{display: "flex", flexDirection: "row"}}>
            {tabs.tabs.map((tab) =>{
            return(
                <HeaderTab selected = {(tab == props.tab)} tab = {tab}>
                    {tab}
                </HeaderTab>
            )
            })}
        </div>
      </HeaderContent>
    </HeaderBar>
  );
}