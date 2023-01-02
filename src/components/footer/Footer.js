import React from 'react'
import { MainFooter, MainLink, MainFotterContent } from './FooterElements'
import { useLocation } from 'react-router-dom'
function Footer() {
    const location = useLocation()
    return (
        <MainFooter location={location}>
            <MainLink>
                Accessibility Statement
            </MainLink>
            <MainFotterContent>
                blogi is a registered trademark of blog Org Ltd.
            </MainFotterContent>
        </MainFooter>
    )
}

export default Footer