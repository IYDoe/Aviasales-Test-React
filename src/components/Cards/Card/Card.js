import React from 'react'
import style from './Card.module.css'


export default function Card(props) {
    console.log(props)
    return (
        <div className={style.card} >
            <div className={style.cardHeader}>
                <div className={style.cardHeaderPrice}>{props.price}</div>
                <div className={style.cardHeaderIcon}>
                    <img src={`//pics.avs.io/99/36/{${props.logo}}.png`} alt="logo" />
                </div>
            </div>
            <div className={style.cardInfo}>
                <div className={style.cardRow}>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>{1} – { }</div>
                        <div className={style.cardColBot}>10:45 – 08:00</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>В пути</div>
                        <div className={style.cardColBot}>21ч 15м</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>{props.stops.length !== 0 ? props.stops.length + " пересадки" : "без пересадок"}</div>
                        <div className={style.cardColBot}>{props.stops}</div>
                    </div>
                </div>
                <div className={style.cardRow}>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>{ } – { }</div>
                        <div className={style.cardColBot}>11:20 – 00:50</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>В пути</div>
                        <div className={style.cardColBot}>13ч 30м</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>2 пересадки</div>
                        <div className={style.cardColBot}>HKG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}