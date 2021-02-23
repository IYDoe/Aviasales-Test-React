import React from 'react'
import style from './Logo.module.css'

export default function Logo() {

    return (
        <div className={style.Logo}>
            <img src="/images/logo.png" alt="logo" />
        </div>
    )
}