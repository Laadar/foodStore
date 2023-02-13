import React, { useCallback, useState } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Featured from '@/components/Featured'
import Search from '@/components/Search'
import Loader from '@/components/Loader'

import { useGetProductsQuery } from '@/api/product'

const App = () => {
    const [theme, setTheme] = useState('light-theme')
    const switchTheme = useCallback(() => {
        theme === 'light-theme'
            ? setTheme('dark-theme')
            : setTheme('light-theme')
    }, [theme])
    const { isFetching } = useGetProductsQuery()
    // По хорошему тут еще обработчик ошибок при реквесте должен быть.

    if (isFetching) return <Loader />
    return (
        <>
            <div className={`themeWrapper ${theme}`}>
                <Header switchTheme={switchTheme} />
                <div className="wrapper">
                    <Featured />
                    <Search />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
