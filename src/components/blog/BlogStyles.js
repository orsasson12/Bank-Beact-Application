import styled from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    height: calc(100% - 88px);
    min-height: 540px;
    flex: 1 1 0%;

    @media screen and (max-width:868px) {
        justify-content: center;
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
          left: ${({ memoLang }) => memoLang === 'en' ? '4%' : '1%'};
          
    }
`
