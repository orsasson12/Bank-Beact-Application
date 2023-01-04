import styled from 'styled-components'
import {  Link as LinkR } from 'react-router-dom'

export const SidebarC = styled.aside`
display: ${({ isOpen }) => (isOpen ? 'flex' : 'none' )};
align-items: center;
justify-content: space-between;
text-align: center;
padding: 0.5rem;
width: 20%;
margin: 0.2rem;
flex-direction: column;
transition: 1s ease-in;
`

export const SidebarListContainer = styled.div`
   position: absolute;
   top: 5%;
   left: ${({memoLang}) => memoLang === 'en'? '4%' : null};
   right: ${({memoLang}) => memoLang === 'he'? '25%' : null};

    @media screen and (max-width:425px) {
          right: ${({ memoLang }) => memoLang === 'he' ? '33%' : null};
    }
    @media screen and (max-width:390px) {
          right: ${({ memoLang }) => memoLang === 'he' ? '45%' : null};
    }
`

export const SidebarList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    position: absolute;
    top: 1.5rem;
    border-radius:5px;
    background-color: #FFFFFF;
`

export const SidebarListItem = styled(LinkR)`
    display: inline-block;
    padding: 0.5rem 0.8rem;
    color:rgb(51, 51, 51);
    text-decoration: none;
    font-size: 1.2rem;
    border-radius: 5px;
    width: max-content;
    align-self: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    &:hover{
        background-color: gray;
        color: white;
        transition: ease-in-out 0.6s;
        cursor: pointer;
    }
`