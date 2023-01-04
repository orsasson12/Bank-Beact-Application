import React, { useContext } from 'react'
import { LanguageContext } from '../../store/LanguageContext'
import { SidebarC, SidebarListItem, SidebarList, SidebarListContainer } from './SidebarStyles'
import { en, he } from '../../data/languageData'
const Sidebar = ({ isOpen, toggle }) => {
    const { memoLang } = useContext(LanguageContext)
    return (
        <SidebarC isOpen={isOpen}>
            <SidebarListContainer memoLang={memoLang}>
                <SidebarList>
                    {memoLang === 'en' ? en.navItems.map((item) => {
                        return <SidebarListItem to={item === 'Home' ? '/' : item}>{item}</SidebarListItem>
                    }) : he.navItems.map((item) => {
                        return <SidebarListItem to={item === 'ראשי' ? '/' : item}>{item}</SidebarListItem>
                    })}
                </SidebarList>
            </SidebarListContainer>
        </SidebarC>
    )
}

export default Sidebar