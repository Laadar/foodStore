import React, { useState, useMemo, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Product from '@/components/Product'

import style from '@/assets/styles/components/product.module.scss'

const ProductContainer = ({ products }) => {
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const finiteProducts = useMemo(() => products, [products])

    useEffect(() => {
        setItems(finiteProducts.splice(0, 3))
        setHasMore(true)
    }, [finiteProducts])

    const fetchData = () => {
        if (finiteProducts.length) {
            let itemsToAdd = []
            let amount = finiteProducts.length >= 3 ? 3 : finiteProducts.length

            for (let i = 0; i < amount; i++) {
                itemsToAdd.push(finiteProducts.shift())
            }
            setItems([...items, ...itemsToAdd])
        } else {
            setHasMore(false)
        }
    }

    return (
        <>
            <div className={style.productContainer}></div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={hasMore}
                scrollableTarget={style.productContainer}
            >
                {items.map((item, index) => (
                    <Product delay={index / 12} key={item.id} item={item} />
                ))}
            </InfiniteScroll>
        </>
    )
}

export default ProductContainer
