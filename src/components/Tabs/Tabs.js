import React from 'react'
import style from './Tabs.module.css'


export default function Tabs() {
    return (
        <div className={style.tabs}>
            <label className={style.tabsBtn}>
                <input className={style.tabsRadio} type="radio" name="tabs" />
                <div className={style.tabsBg}>Самый дешевый</div>
            </label>
            <label className={style.tabsBtn}>
                <input className={style.tabsRadio} type="radio" name="tabs" />
                <div className={style.tabsBg}>Самый быстрый</div>
            </label>
            <label className={style.tabsBtn}>
                <input className={style.tabsRadio} type="radio" name="tabs" />
                <div className={style.tabsBg}>Оптимальный</div>
            </label>

        </div>
    )
}