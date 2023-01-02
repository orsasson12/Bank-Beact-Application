import React from 'react'
import Footer from '../footer/Footer'
import { FormSubmitText, FormInputWrapper, FooterWrapper, FormContainer, FormTitle, FormInput, FormButton, BlogContainer, CardLink, CardContainer, CardImg, CardDate, CardTitle, CardContent } from './BlogElements'
function Blog() {
    return (
        <>
        <BlogContainer>
            <CardContainer>
                <CardLink to='/'>
                    <CardImg alt='bubbles' src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/floating-translucent-soap-bubbles.jpg' />
                    <CardDate>25/12/2022 * OR Sasson</CardDate>
                    <CardTitle>A new blog is coming</CardTitle>
                    <CardContent>
                        It's been more than 5 years since Shalom Raanan, Arthur and I began our journey
                        and formed hse, and finally,w...
                    </CardContent>
                </CardLink>
            </CardContainer>

            <FormContainer>
                <FormTitle>
                    Stay up to date with our latest news
                </FormTitle>
                <FormInputWrapper>
                <FormInput placeholder='Enter your email address'></FormInput>
                <FormButton>SUBSCRIBE</FormButton>
                </FormInputWrapper>
                <FormSubmitText>
                    By submitting my email address, 
                    I agree to receive marketing emails,
                     newsletters and updateds.
                </FormSubmitText>
            </FormContainer>
        </BlogContainer>
        <FooterWrapper>
            <Footer  />
        </FooterWrapper>
            </>
    )
}

export default Blog