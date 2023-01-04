import React from 'react'
import { FormContainer, FormTitle, FormInput, FormButton, FormInputWrapper, FormSubmitText } from './FormStyles'

function Form({ memoLang, en, he }) {
    return (
        <FormContainer>
            <FormTitle>
                {memoLang === 'en' ? en.blogStay : he.blogStay}
            </FormTitle>
            <FormInputWrapper>
                <FormInput placeholder={memoLang === 'en' ? en.blogInputPlaceholder : he.blogInputPlaceholder}></FormInput>
                <FormButton>{memoLang === 'en' ? en.blogButton : he.blogButton}</FormButton>
            </FormInputWrapper>
            <FormSubmitText>
                {memoLang === 'en' ? en.blogSubmiting : he.blogSubmiting}
            </FormSubmitText>
        </FormContainer>
    )
}

export default Form