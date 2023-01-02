import React from 'react'
import Footer from '../footer/Footer'
import { MainContainer, MainTitle, MainButtonsTitle, MainButton, MainDownContainer, MainButtons } from './MainElements'
const Main = () => {
    return (
        <MainContainer>
            <MainTitle>
                hse.
            </MainTitle>
            <MainDownContainer>
                <MainButtonsTitle>
                    A new bank is coming
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