import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import Product from '@/components/Product'

import style from '@/assets/styles/components/featured.module.scss'

const Featured = () => {
    const products = useSelector((state) => state.products)
    const featuredProducts = useMemo(() => {
        return products.slice(-3)
    }, [products])

    return (
        <>
            {!!featuredProducts?.length ? (
                <div className={style.featured}>
                    <h1 className={style.featuredHeading}>Спешите купить</h1>
                    <div className={style.featuredContainer}>
                        {featuredProducts.map((product, index) => (
                            <Product
                                delay={index / 2}
                                key={product.id}
                                item={product}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Featured
