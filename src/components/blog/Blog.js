import React, { useContext } from 'react'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import Form from '../form/Form'
import { en, he } from '../../data/languageData'
import { FooterWrapper, BlogContainer } from './BlogStyles'
import { LanguageContext } from '../../store/LanguageContext'
function Blog() {
    const { memoLang } = useContext(LanguageContext)

    return (
        <>
            <BlogContainer>
                <Card he={he} en={en} memoLang={memoLang} />
                <Form he={he} en={en} memoLang={memoLang} />
            </BlogContainer>
            <FooterWrapper memoLang={memoLang}>
                <Footer />
            </FooterWrapper>
        </>
    )
}

export default Blog