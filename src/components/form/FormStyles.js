import styled from "styled-components";


export const FormContainer = styled.form`
    position: absolute;
    top: 59%;
    right: 33%;
    
    display: flex;
    align-items: center;
    flex-direction: column;
      @media screen and (max-width:868px) {
        right: 22%;
    }
      @media screen and (max-width:593px) {
        right: 10%;
        top: 59%;
    }
      @media screen and (max-width:380px) {
        right: 0;
    }
`

export const FormTitle = styled.h3`
    padding: 1.2rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 1rem;
      @media screen and (max-width:868px) {
       margin-top: 1rem;
       margin-bottom: 0;
    }
`

export const FormInput = styled.input`
    padding: 1rem;
    border-radius: 6px;
    border-right: none;
    outline: none;
    border-color: #D3D3D3;
    &:hover{
        border-color: #000000;
        transition: ease-in-out 0.2s;
    }
`
export const FooterWrapper = styled.div`
    position: absolute;
    display: flex;
    left: 35%;
    bottom: 5%;
      @media screen and (max-width:1250px) {
          left: 25%;
        
    }
      @media screen and (max-width:868px) {
          left: 18%;
          margin-top: 1rem;
    }
      @media screen and (max-width:593px) {
          left: 7%;
          
    }
      @media screen and (max-width:380px) {
          left: 4%;
          
    }
`
export const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const FormSubmitText = styled.span`
padding: 1rem;
font-size: 0.7rem;
text-align: center;
`
export const FormButton = styled.button`
    background-color: #F2B2D5;
    border-radius: 10px;
    padding: 1rem;
    max-width: 110px;
    text-align: center;
    cursor: pointer;
    border-left: none;
    font-weight: bold;
`