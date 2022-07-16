import styled from "styled-components"
import img from "../assets/MainPageBackground.png"

const MainPageContainer = styled.div`
margin: 0;
`

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: black;
color: white;
`

const SectionContainer = styled.header`
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
color: white;
`

const FooterContainer = styled.header`
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
color: white;
`

const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Poiret One', cursive;
font-size: 25px;
padding-left: 70px;
padding-bottom: 5px;
`

const Menu = styled.div`
padding-right: 60px;
width: 400px;
color: white;

button{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bolder;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    transition: padding 0.3s;

    :hover{
       padding: 15px;
    }
}
`





export function MainPage(props){


    return (

        <MainPageContainer>
            
            <HeaderContainer>
                <Logo>
                    <h1>LAMA</h1>
                    <h4>Labenu Musical Awards</h4>
                </Logo>
                <Menu>
                    <button>Clique aqui e garanta já seu ingresso</button>
                </Menu>
            </HeaderContainer>

            <SectionContainer>
                
            </SectionContainer>

            <FooterContainer>
                <h1>Footer</h1>
            </FooterContainer>

        </MainPageContainer>

    )
}