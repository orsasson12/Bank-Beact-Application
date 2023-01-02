import React from 'react'
import { SidebarC, SidebarListItem, SidebarList, SidebarListContainer } from './SidebarElements'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarC isOpen={isOpen}>
            <SidebarListContainer>
                <SidebarList>
                    <SidebarListItem to='/' onClick={toggle}>
                       Home
                    </SidebarListItem>
                    <SidebarListItem to='/blog' onClick={toggle}>
                       Blog
                    </SidebarListItem>
                    <SidebarListItem to='/' onClick={toggle}>
                        Careers
                    </SidebarListItem>
                </SidebarList>
            </SidebarListContainer>
        </SidebarC>
    )
}

export default Sidebar