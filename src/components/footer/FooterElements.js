import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
export const MainFooter = styled.div`
    display: flex;
    direction: ${({ memoLang }) => memoLang === 'en' ? 'ltr' : 'rtl'};
    flex-direction: column;
    border-top: 1px solid;
    width: 500px;
    margin-top: 7rem;
    overflow: hidden;
    align-items: center;
    @media screen and (max-width:768px) {
        width: 450px;
    }
    @media screen and (max-width:485px){
        width: 350px;
        margin-top: ${({location}) => (location.pathname === '/blog' ? '0rem' : '7rem' )};
    }
    @media screen and (max-width:340px){
        width: 250px;
        margin-top: 2rem;
    }
`

export const MainLink = styled(LinkR)`
text-decoration: none;
color: black;
align-self: flex-start;
padding: 0.2rem;

    &:hover{
        cursor: pointer;
        color: gray;
        transition: ease-in-out 0.6s;
    }
`

export const MainFotterContent = styled.p`
    font-size: 0.7rem;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;

`