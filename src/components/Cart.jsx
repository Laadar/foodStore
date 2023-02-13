import React from 'react'
import { useSelector } from 'react-redux'

import cartIcon from '@/assets/images/cart.svg'
import style from '@/assets/styles/components/header.module.scss'

const Cart = ({ toggleDialog }) => {
    const cart = useSelector((state) => state.cart)

    return (
        <>
            <div
                onClick={() => toggleDialog(true)}
                className={style.headerCart}
            >
                <div className={style.headerCartAmount}>{cart.length}</div>
                <div
                    style={{ backgroundImage: `url(${cartIcon})` }}
                    className={style.headerCartIcon}
                />
            </div>
        </>
    )
}

export default Cart
