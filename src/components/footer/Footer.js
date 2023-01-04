import React, { useContext } from 'react'
import { MainFooter, MainLink, MainFotterContent } from './FooterElements'
import { useLocation } from 'react-router-dom'
import { en, he } from '../../data/languageData'
import { LanguageContext } from '../../store/LanguageContext'
function Footer() {
    const { memoLang } = useContext(LanguageContext)
    const location = useLocation()
    return (
        <MainFooter location={location} memoLang={memoLang}>
            <MainLink>
                {memoLang === 'en' ? en.accessibllity : he.accessibllity}
            </MainLink>
            <MainFotterContent>
                blogi is a registered trademark of blog Org Ltd.
            </MainFotterContent>
        </MainFooter>
    )
}

export default Footer