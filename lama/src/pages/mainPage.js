import axios from "axios"
import { useEffect, useState } from "react"
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
display: flex;
justify-content: center;
align-items: center;
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

const Display = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 400px;
width: 800px;
`

const LeftArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
border-radius: 100%;
font-size: 30px;
height: 50px;
width: 50px;
transition: font-size 0.1s;
color: white;

:hover{
    font-size: 40px;
}
`

const RightArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
border-radius: 100%;
font-size: 30px;
height: 50px;
width: 50px;
transition: font-size 0.1s;
color: white;

:hover{
    font-size: 40px;
}
`

const Canvas = styled.div`
overflow: hidden;
border-radius: 10px;
height: 100%;
width: 600px;

img{
    height: 100%;
}
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

    const [photos, setPhotos] = useState([])
    const [photoNum, setPhotoNum] = useState(0)

    const fowardPhoto = ()=> {
        let number = photoNum + 1
        if(photoNum >= (photos.length - 1)){
            number = 0
            setPhotoNum(number)
        }else{
            setPhotoNum(number)
        }
        console.log("foward foto")
    }

    const BackPhoto = ()=> {
        let number = photoNum - 1
        if(photoNum <= 0){
            number = 0
            setPhotoNum(number)
        }else{
            setPhotoNum(number)
        }
        console.log("back foto", number)
    }

    const getPhotos = ()=> {
        let Headers = {
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
              },
        }
        axios.get("https://silveira-lama7.herokuapp.com/gallery/all",Headers)
        .then(res => {
            setPhotos(res.data)
        })
        .catch(error => {
            console.log(error)
        })

        }

    useEffect(()=>{
        getPhotos()
    },[])


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
                <Display>
                    <LeftArrow onClick={BackPhoto}>
                    <i class="fa-solid fa-chevron-left"/>
                    </LeftArrow>
                    <Canvas>
                        <img src={`${photos[photoNum] && photos[photoNum].photo}`}/>
                    </Canvas>
                    <RightArrow onClick={fowardPhoto}>
                    <i class="fa-solid fa-angle-right"/>
                    </RightArrow>
                </Display>
            </SectionContainer>

            <FooterContainer>
                
            </FooterContainer>

        </MainPageContainer>

    )
}