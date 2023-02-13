import React, { useState, useMemo } from 'react'

import SearchIcon from '@/assets/images/search.svg'
import style from '@/assets/styles/components/search.module.scss'

const SearchBar = ({ addItem, getProducts, results }) => {
    let [needle, setNeedle] = useState('')

    const handleItemClick = (item) => {
        addItem(item)
        setNeedle('')
    }

    // делаю два просто чтоб визуально не закрывало пол экрана
    const searchItemsReduced = useMemo(() => results.slice(0, 2), [results])

    return (
        <div className={style.searchBar}>
            <div className={style.searchBarWrapper}>
                <input
                    className={style.searchBarInput}
                    type="text"
                    placeholder="Поиск..."
                    onChange={(e) => setNeedle(e.target.value)}
                    value={needle}
                />
                {!!searchItemsReduced.length && (
                    <div className={style.searchResults}>
                        {searchItemsReduced.map((item) => {
                            return (
                                <div onClick={() => handleItemClick(item)} key={item.id} className={style.searchResult}>
                                    <img
                                        className={style.searchResultImage}
                                        src={item.images[0]}
                                    />
                                    <div className={style.searchResultInfo}>
                                        <div className={style.searchResultName}>
                                            {item.title}
                                        </div>
                                        <div className={style.searchResultPrice}>
                                            {item.price} $
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div
                onClick={() => getProducts(needle)}
                className={style.searchBarButton}
                style={{
                    backgroundImage: `url(${SearchIcon})`
                }}
            ></div>
        </div>
    )
}

export default SearchBar
