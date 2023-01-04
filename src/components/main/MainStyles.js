import styled, { keyframes } from "styled-components";



export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;   
   
`


export const MainTitle = styled.h1`
position: absolute;
top: 45%;
transform: translateY(-50%);
margin: 0;
padding: 0;
text-align: center;
font-size: 10em;
color: #fff;
text-shadow: 0 5px 10px rgba(0,0,0,1);
mix-blend-mode: overlay;
@media screen and (max-width:768px) {
    font-size: 5rem;
}
`


export const MainDownContainer = styled.div`
   position: absolute;
   top: 60%;
   text-align: center;
`
const fadeIn = keyframes`
    from{
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 4s, opacity 4s linear;
    }
    to{
        visibility: visible;
        opacity: 1;
        transition: opacity 2s linear;
    }
`
export const MainButtonsTitle = styled.h2`
    color: white;
    font-size: 2rem;
    padding: 1rem;
    font-weight: 500;
    font-family: PloniMedium;
    animation-name: ${fadeIn};
    animation-duration: 4s;
`
const fadeInbutton = keyframes`
    from{
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 6s, opacity 6s linear;
    }
    to{
        visibility: visible;
        opacity: 1;
        transition: opacity 6s linear;
    }
`
export const MainButton = styled.button`
    color: lightcoral;
    padding: 1.2rem;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    background-color: #fffeee;
     animation-name: ${fadeInbutton};
     animation-duration: 6s;
    &:hover{
        background-color: #ffffff;
        cursor: pointer;
        transition: ease-in-out 0.5s;
    }
`
