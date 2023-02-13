import React, { useState, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Dialog from '@/components/Dialog'
import Cart from '@/components/Cart'
import CartForm from '@/components/CartForm'

import dialogStyle from '@/assets/styles/components/dialog.module.scss'
import headerStyle from '@/assets/styles/components/header.module.scss'

const Header = ({ switchTheme }) => {
    const cart = useSelector((state) => state.cart)

    const [showDialog, setShowDialog] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const toggleDialog = useCallback((payload) => {
        setIsSuccess(false)
        setShowDialog(payload)
    }, [])
    const setSuccess = useCallback((payload) => setIsSuccess(payload), [])

    const dialogContent = useMemo(() => {
        if (isSuccess) {
            return (
                <div className={dialogStyle.dialogSuccess}>
                    Поздравляем, Ваш Заказ оформлен
                </div>
            )
        }

        return <CartForm setSuccess={setSuccess} />
    }, [isSuccess])

    return (
        <>
            <div className={headerStyle.header}>
                <div onClick={switchTheme} className={headerStyle.headerThemeSwitcher}>
                    Переключить тему
                </div>
                <div className={headerStyle.headerHeading}>
                    Корм для котов и других животных
                </div>
                {!!cart?.length && <Cart toggleDialog={toggleDialog} />}
            </div>
            {showDialog && (
                <Dialog toggleDialog={toggleDialog}>{dialogContent}</Dialog>
            )}
        </>
    )
}

export default Header
