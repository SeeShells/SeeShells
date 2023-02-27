import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import logo from "./seeshellsLogo-flipped.png";
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const tabs = require("./tabs.json")



export default function Header(props) 
{

    const HeaderBar = styled.div`
    display: flex;
    position: sticky;
    width: 100vw;
    background: #2C313D;
    height: "10vh";
    color: #FFFBF0;
    font-family: "IBM Plex Sans Condensed";
    margin-bottom:-10px;
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
        &:hover {
            cursor: pointer;
        };
    `

    const HomeButton = styled.div`
        &:hover {
            cursor: pointer;
        };
        display: flex;
    `

    const navigation = useNavigate();

    function downloadSeeShells()
    {
        const button = document.createElement('a')
        button.href = "https://github.com/ShellBags/v2/releases/download/v2.0-beta.4/SeeShellsV2.zip"
        button.setAttribute("download", "SeeShellsV2")
        button.click()
        button.remove()
    }

    function checkSize()
    {
        console.log("Testing" + props.size.width);
        if (props.size.width <= 750)
        {
            return(
                <HeaderContent>
                    <FaBars style={{width:"40px", height:"40px"}} />
                    <div style={{display:"flex", flexDirection: "row", alignItems:"center"}}> 
                        <h1 style={{fontSize: 35}}>
                        SeeShells
                        </h1>
                    </div>
                </HeaderContent>
            )
        }
        else
        {
            return(
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
            )
        }
    }

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
                    <Download onClick={downloadSeeShells}>
                        Download
                    </Download>
                </div>
            )
        }
        else
        {
            return(
                <div style={{display:"flex", flexDirection: "row", alignItems:"center", border:"2px solid white"}}> 
                    <h1 style={{fontSize: 35}}>
                    SeeShells
                    </h1>
                </div>
            )
        }
    }

  return (
    <HeaderBar>
        {checkSize()}
    </HeaderBar>
  );
}