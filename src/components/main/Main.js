import React from 'react'
import Footer from '../footer/Footer'
import { MainContainer, MainTitle, MainButtonsTitle, MainButton, MainDownContainer, MainButtons } from './MainElements'
const Main = () => {
    return (
        <MainContainer>
            <MainTitle>
                Sassi.
            </MainTitle>
            <MainDownContainer>
                <MainButtonsTitle>
                    A new blog is coming
                </MainButtonsTitle>
                <MainButton>
                    Read Latest Updates
                </MainButton>
                <Footer />
            </MainDownContainer>
        </MainContainer>
    )
}

export default Main