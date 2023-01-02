import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavLink, NavTitle, Bars, LangItem, LangDrop, LangList, DropDown, NavDropDown, DropDownContent, NavMenu, NavLang, NavLangBtn } from './NavbarElement'
import { TfiWorld } from 'react-icons/tfi'
import { useLocation } from 'react-router-dom'
const Navbar = ({ toggle }) => {
    const location = useLocation()
    const [toggleLang, setToggleLang] = useState(false)
    const isLangOpen = () => {
        setToggleLang((prev) => !prev)
    }
    return (
        <>
            <Nav location={location}>
                <NavLink to='/'>
                    <NavTitle>Logo</NavTitle>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/blog' activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to='#' activeStyle>
                        Careers
                    </NavLink>
                </NavMenu>
                <NavLang>
                    <NavDropDown>
                        <NavLangBtn><TfiWorld onClick={isLangOpen} /></NavLangBtn>
                        <DropDownContent>
                            <DropDown> select language </DropDown>
                        </DropDownContent>
                        {toggleLang ? (
                            <LangDrop>
                                <LangList>
                                    <LangItem>
                                        English
                                    </LangItem>
                                    <LangItem>
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