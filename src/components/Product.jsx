import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '@/store/slices/cart'

import style from '@/assets/styles/components/product.module.scss'

const Product = ({ item, delay }) => {
    const dispatch = useDispatch()

    const itemDescription = useMemo(() => {
        return item.description.length > 69
            ? `${item.description.slice(0, 66)}...`
            : item.description
    }, [item])

    return (
        <div className={style.product} style={{ animationDelay: `${delay}s` }}>
            <img className={style.productImage} src={item.images[0]} />
            <div className={style.productInfo}>
                <div className={style.productName}>{item.title}</div>
                <div className={style.productPrice}>$ {item.price}</div>
            </div>
            <div className={style.productDescription}>{itemDescription}</div>
            <div
                onClick={() => dispatch(addProductToCart(item))}
                className={style.productButton}
            >
                В корзину
            </div>
        </div>
    )
}

export default Product
