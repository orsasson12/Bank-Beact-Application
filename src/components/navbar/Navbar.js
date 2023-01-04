import React, { useState, useContext } from 'react'
import { Nav, NavLink, NavTitle, Bars, LangItem, LangDrop, LangList, DropDown, NavDropDown, DropDownContent, NavMenu, NavLang, NavLangBtn } from './NavbarStyled'
import { TfiWorld } from 'react-icons/tfi'
import { useLocation } from 'react-router-dom'
import { en, he } from '../../data/languageData'
import { LanguageContext } from '../../store/LanguageContext'
const Navbar = ({ toggle, setLanguage }) => {
    const location = useLocation()
    const { memoLang } = useContext(LanguageContext)
    const [toggleLang, setToggleLang] = useState(false)
    const isLangOpen = () => {
        setToggleLang((prev) => !prev)
    }

    function changeLanguage(language) {
        setLanguage(language)
    }
    console.log(memoLang);
    return (
        <>
            <Nav location={location} memoLang={memoLang}>
                <NavLink to='/'>
                    <NavTitle>Logo</NavTitle>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    
                    {memoLang === 'en' ? en.navItems.map((item)=>{
                        return <NavLink to={item === 'Home' ? '/' : item}>{item}</NavLink>
                    }) : he.navItems.map((item) =>{
                        return <NavLink to={item === 'ראשי' ? '/' : item}>{item}</NavLink>
                    }) }
                    
                    
                </NavMenu>
                <NavLang>
                    <NavDropDown toggleLang={toggleLang}>
                        <NavLangBtn><TfiWorld onClick={isLangOpen} /></NavLangBtn>
                        <DropDownContent>
                            <DropDown> select language </DropDown>
                        </DropDownContent>
                        {toggleLang ? (
                            <LangDrop memoLang={memoLang}>
                                <LangList>
                                    <LangItem onClick={() => changeLanguage('en')} >
                                        English
                                    </LangItem>
                                    <LangItem value='he' name='he' onClick={() => changeLanguage('he')}>
                                        עברית
                                    </LangItem>
                                </LangList>
                            </LangDrop>
                        ) : null}
                    </NavDropDown>
                </NavLang>
            </Nav>
        </>
    )
}

export default Navbar