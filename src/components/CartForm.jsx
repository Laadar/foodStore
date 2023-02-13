import React, { useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTakeOrderRequestMutation } from '@/api/someBackendApi'
import { clearCart } from '@/store/slices/cart'

import style from '@/assets/styles/components/dialog.module.scss'


const CartForm = ({ setSuccess }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [takeOrderRequest, data] = useTakeOrderRequestMutation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const orderDisabled = useMemo(() => {
        return !name.length || !email.length || !cart.length
    }, [name, email, cart])

    const takeOrder = useCallback(async () => {
        if (orderDisabled) return
        
        // И тут мы как бы прокидываем пост реквест на бэк с нашим заказом
        try {
            await takeOrderRequest({ cart, name, email })
            // тут очевидно будто ошибка потому что эндпоинта не существует
            // dispatch(clearCart())
            // setSuccess(false)
        } catch (e) {
            // Снова же тут должен быть нормальный хендлер ошибок
            console.log(e)
        } finally {
            // Сделаем вид что бэк овтетил 200 в блоке трай
            dispatch(clearCart())
            setSuccess(true)
        }
    }, [cart, name, email, orderDisabled])

    return (
        // Тут по хорошему должна быть конечно валидация и поля для ошибок при валидации

        <div className={style.dialogInfo}>
            <h1 className={style.dialogInfoHeading}>Оформить заказ</h1>
            <input
                className={style.dialogInfoInput}
                placeholder="Ваше имя"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                className={style.dialogInfoInput}
                placeholder="Ваш email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <div
                onClick={takeOrder}
                className={`${style.dialogInfoButton} ${ orderDisabled ? 'disabled' : ''}`}
            >
                Купить
            </div>
        </div>
    )
}

export default CartForm
