import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchBar from '@/components/SearchBar'
import ProductContainer from '@/components/ProductContainer'
import { addProductToCart } from '@/store/slices/cart'

import style from '@/assets/styles/components/search.module.scss'

const Search = () => {
    const dispatch = useDispatch()
    let products = useSelector((state) => state.products)
    let [searchQuery, setSearchQuery] = useState([])

    const getProducts = useCallback((needle) => {
        setSearchQuery([])

        if (!needle || !needle.length) return

        let result = products.filter((product) => {
            let lowerProductTitle = product?.title.toLowerCase()
            let lowerNeedle = needle.toLowerCase()

            return lowerProductTitle.includes(lowerNeedle)
        })
        setSearchQuery(result)
    }, [])

    const addItem = useCallback((item) => {
        dispatch(addProductToCart(item))
        setSearchQuery([])
    }, [])

    return (
        <div className={style.search}>
            <SearchBar
                results={searchQuery}
                addItem={addItem}
                getProducts={getProducts}
            />
            {!!searchQuery?.length && (
                <ProductContainer products={searchQuery} />
            )}
        </div>
    )
}

export default Search
