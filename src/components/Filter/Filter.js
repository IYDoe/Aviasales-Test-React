import React from 'react'
import style from './Filter.module.css'


export default function Filter(props) {
    return (
        <div className={style.filter}>
            <h2 className={style.filterTitle}>Количество пересадок</h2>

            <form className={style.filterForm}>
                <label className={style.filterCheckItem}>
                    <input
                        className={style.filterCheck}
                        type="checkbox"
                        name="all"
                        onChange={props.handleChange}
                    />
                    Все
                </label>
                <label className={style.filterCheckItem}>
                    <input
                        className={style.filterCheck}
                        type="checkbox"
                        name="noStops"
                        onChange={props.handleChange}
                    />
                    Без пересадок
                </label>
                <label className={style.filterCheckItem}>
                    <input
                        className={style.filterCheck}
                        type="checkbox"
                        name="oneStops"
                        onChange={props.handleChange}
                    />
                    1 пересадка
                </label>
                <label className={style.filterCheckItem}>
                    <input
                        className={style.filterCheck}
                        type="checkbox"
                        name="twoStops"
                        onChange={props.handleChange}
                    />
                    2 пересадка
                </label>
                <label className={style.filterCheckItem}>
                    <input
                        className={style.filterCheck}
                        type="checkbox"
                        name="threeStops"
                        onChange={props.handleChange}
                    />
                    3 пересадка
                </label>
            </form>

        </div>
    )
}