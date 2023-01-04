import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    justify-content: center;
    outline: none;
    background: none;
    width: 30%;
    margin-left:1.5rem;
      @media screen and (max-width:868px) {
       width:50%;
    }
      @media screen and (max-width:593px) {
       width:100%;
    }
`

export const CardLink = styled(LinkR)`
text-decoration:none;
&:hover{
    transform: scale(0.95);
    cursor: pointer;
}
@media screen and (max-width:868px){
    margin-bottom: 6rem;
}
`

export const CardImg = styled.img`
    width: 60%;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    align-self: flex-start;
    margin-left: 3rem;
    border-bottom: solid 1px;
`

export const CardDate = styled.h6`
padding: 1rem;
margin-left: 1.8rem;
font-size: 0.8rem;
color: black;
text-align: ${({ memoLang }) => memoLang === 'he' ? 'center' : null};
`

export const CardTitle = styled.p`
margin-left: 3rem;
font-size: 1.8rem;
font-weight: 300;
color: black;
text-align: ${({memoLang}) => memoLang === 'he' ? 'center' : null};
`
export const CardContent = styled.p`
width: ${({ memoLang }) => memoLang === 'he' ? '80%' : '70%'};
margin-left: 2rem;
padding: 1rem;
font-size: 0.9em;
margin-bottom: 1rem;
line-height: 1.5rem;
color: black;
text-align: ${({ memoLang }) => memoLang === 'he' ? 'center' : null};
`