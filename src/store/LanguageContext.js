import { createContext, useEffect, useState, useMemo } from 'react'

export const LanguageContext = createContext(null)
export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(JSON.parse(localStorage.getItem('language')))
    const memoLang = useMemo(() => language, [language])
    useEffect(() => {
        if (memoLang) {
            return localStorage.setItem('language', JSON.stringify(memoLang))
        }
    }, [ memoLang])
    return (
        <LanguageContext.Provider value={{ memoLang, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider