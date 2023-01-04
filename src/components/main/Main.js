import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import { MainContainer, MainTitle, MainButtonsTitle, MainButton, MainDownContainer } from './MainStyles'
import { en, he } from '../../data/languageData'
import { LanguageContext } from '../../store/LanguageContext'
const Main = () => {
    const { memoLang } = useContext(LanguageContext)
    return (
        <MainContainer>
            <MainTitle>
                Sassi.
            </MainTitle>
            <MainDownContainer>
                <MainButtonsTitle>
                    {memoLang === 'en' ? en.mainTitle : he.mainTitle}
                </MainButtonsTitle>
                <MainButton>
                    {memoLang === 'en' ? en.mainTitle : he.mainTitle}
                </MainButton>
                <Footer />
            </MainDownContainer>
        </MainContainer>
    )
}

export default Main