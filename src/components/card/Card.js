import React, { memo } from 'react'
import { CardContainer, CardLink, CardImg, CardDate, CardTitle, CardContent } from './CardStyles'
function Card({ memoLang, en, he }) {

    return (
        <CardContainer>
            <CardLink to='/'>

                <CardImg memoLang={memoLang} alt='bubbles' src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/floating-translucent-soap-bubbles.jpg' />
                <CardDate memoLang={memoLang}>25/12/2022 * {memoLang === 'en' ? en.blogAuthor : he.blogAuthor}</CardDate>
                <CardTitle memoLang={memoLang}>{memoLang === 'en' ? en.blogTitle : he.blogTitle}</CardTitle>
                <CardContent memoLang={memoLang}>
                    {memoLang === 'en' ? en.blogDesc : he.blogDesc}
                </CardContent>
            </CardLink>
        </CardContainer>
    )
}

export default Card