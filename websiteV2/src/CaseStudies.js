import styled from "styled-components";
import Header from "./Header";
import logo from "./seeshellsLogo-flipped.png";
import { MainContent, Title, MainText, Contain } from "./customStyles";
import Grid from '@mui/material/Grid';
import { caseStudyInfo } from "./CaseStudiesArray";

export default function CaseStudies() {
    const HeaderContent = styled.div`
        background: #2C313D;
    `
    const SectionHeader = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 20pt;
        font-weight: bold;
        margin: 3%;
        text-align: center;
    `
    const ImageDiv = styled.div`
        margin-top: 15px;
        height: 210px;
        width: 210px;
        background: #2C313D;
        border-radius: 10px;
    `
    const CaseStudyBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        justify-content:center;

    `
    const CaseTitle = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 18pt;
        font-weight: semibold;
        text-align: center;
    `
    const Caption = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 13pt;
        margin-top:5px;
        text-align: center;
    `
    const StudiesButtons = styled.div`
        font-family: "IBM Plex Sans Condensed";
        font-size: 16pt;
        margin-top:5px;
        text-align: center;
        background: #2C313D;
        padding:15px;
        width: 75px;
        border-radius: 5px;
    `
    const Image = styled.img`
        height: 210px;
        width: 210px;
    `
    const Logo = styled.img`
        height: 190px;
        width: 190px;
        margin-top: 10px;
        

    `

    function displayImageOrDefault(imgString) {
        if (imgString == null) {
            return <Logo src={logo} />
        }

        return (
            <Image src={imgString} />
        )
    }

    return (
        <Contain>    
            <Header tab="Case Studies" />
            <HeaderContent>
                <Title>
                    Case Studies
                </Title>
            </HeaderContent>
            <MainContent>
                {caseStudyInfo.map((CaseType) => {
                    return (
                        <div> 
                            <SectionHeader>
                                {CaseType.type}
                            </SectionHeader>
                            <CaseStudyBox>
                                <Grid container justifyContent={"center"} columns={2} spacing={40}>
                                    {CaseType.cases.map((Case) => {
                                        return (
                                            <Grid item align="center" sm={"auto"} md={6} lg={"auto"} >
                                                <CaseTitle>
                                                    {Case.title}
                                                </CaseTitle>
                                                 <ImageDiv>
                                                    {displayImageOrDefault(Case.vidLink)}
                                                </ImageDiv>
                                                <Caption>
                                                    {Case.caption }
                                                </Caption>
                                                <Grid container justifyContent={"center"} columns={2} spacing={20}>
                                                    <Grid item align="center" sm={"auto"} md={6} lg={"auto"} >
                                                        <StudiesButtons>
                                                            PDF
                                                        </StudiesButtons>
                                                    </Grid>
                                                    <Grid item align="center" sm={"auto"} md={6} lg={"auto"} >
                                                        <StudiesButtons>
                                                            Reg File
                                                        </StudiesButtons>
                                                    </Grid>
                                                </Grid>

                                    </Grid>
                                    )}
                                    )

                                    }
                                </Grid> 

                            </CaseStudyBox>
                            
                        </div>
                    )
                })}
                
            </MainContent>
        </Contain>
        );
}