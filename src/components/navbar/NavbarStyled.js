import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
export const Nav = styled.nav`
background-color: ${({ location }) => (location.pathname !== '/' ? '#2E2F38' : 'transparent')};
height: 80px;
direction: ${({memoLang}) => memoLang === 'en' ? 'ltr' : 'rtl'};
display: flex;
padding: 0.5rem calc((80vw - 1000px) / 2);
z-index: 10;
justify-content: flex-start;
`

export const NavTitle = styled.h2`
color: rgb(106, 109, 230);
 @media screen and (max-width:868px) {
        display: none;
    }
`
export const NavLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0px;
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    line-height: 20px;
    height: 90%;
    cursor: pointer;
    text-shadow: rgb(0 0 0 / 12%) 0px 1px 4px;
    text-transform: none;
    color: rgb(106, 109, 130);
    &.active{
        color: #15cdfc;
    };
    &:hover{
        color: #0f0f00;
        text-shadow: rgb(0 0 0 / 12%) 1px 2px 5px;
        transition: 0.5s ease-in-out;  
    }
`


export const Bars = styled(FaBars)`
    display: none;
    
    @media screen and (max-width:868px) {
        display: block;
        position:  ${({ memoLang }) => memoLang === 'en' ? 'absolute' : 'none'};
        color: white;
        top: 15px;
        left: 3rem;
        transform: translate(-100%,75%);
        font-size: 1.3rem;
        cursor: pointer;
    }
`



export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    white-space: nowrap;
    @media screen and (max-width:868px) {
        display: none;
    }
`

export const NavLang = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: flex-end;
    width: 100vw;

`
export const NavLangBtn = styled(LinkR)`
    border-radius:4px;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2 ease-in-out;

    }
`

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  right:-15%;
  background-color:#A9A9A9;
  border-radius: 15px;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 22;

  `
export const NavDropDown = styled.div`
      position: relative;
      display: inline-block;

      &:hover ${DropDownContent}{
             display: flex;
            justify-content: center;
      }
  `
export const DropDown = styled(LinkR)`
   color: white;
   padding: 4px 5px;
   text-decoration: none;
   display: block;
`


export const LangDrop = styled.div`
position: absolute;
   top: 40%;
   /* right: 50%; */
   right: ${({ memoLang }) => memoLang === 'en' ? '50%' : 'none'};
   left: ${({ memoLang }) => memoLang === 'he' ? '50%' : 'none'};
`

export const LangList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    margin-top: 1rem;
    border-radius:5px;
    background-color: #FFFFFF;
`

export const LangItem = styled.li`
   display: inline-block;
    padding: 0.5rem 0.8rem;
    color:rgb(51, 51, 51);
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    &:hover{
        background-color: gray;
        color: white;
        transition: ease-in-out 0.6s;
        cursor: pointer;
    }
`