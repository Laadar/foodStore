import React from 'react'

import style from '@/assets/styles/components/dialog.module.scss'
import closeIcon from '@/assets/images/cross.svg'

const Dialog = ({ toggleDialog, children }) => {
    const outerClick = (e) => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            toggleDialog(false)
        }
    }

    return (
        <div className={style.dialogWrapper} onClick={outerClick}>
            <div className={style.dialog}>
                <div className={style.dialogContent}>{children}</div>
                <div
                    style={{ backgroundImage: `url(${closeIcon})` }}
                    className={style.dialogClose}
                    onClick={() => toggleDialog(false)}
                ></div>
            </div>
        </div>
    )
}

export default Dialog
