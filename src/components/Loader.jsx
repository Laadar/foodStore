import React from "react"

import style from '@/assets/styles/components/loader.module.scss'

const Loader = () => {
  return (
    <div className={style.modalLoader}>
        <div className={style.loader} />
    </div>
  )
};

export default Loader;
