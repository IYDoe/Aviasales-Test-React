import React from 'react'
import style from './Card.module.css'


export default function Card(props) {
    console.log(props);

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60)
        let minutes = mins % 60
        return hours + 'ч ' + minutes + 'м'
    }

    return (
        <div className={style.card}  >
            <div className={style.cardHeader}>
                <div className={style.cardHeaderPrice}>{props.item.price.toString().split("").reverse().reduce((agregation, char, i) => {
                    if (i % 3 === 0) {
                        return agregation + " " + char
                    }
                    return agregation + char
                }, "Р ").split("").reverse().join("")}</div>
                <div className={style.cardHeaderIcon}>
                    <img src={`//pics.avs.io/99/36/{${props.item.carrier}}.png`} alt="logo" />
                </div>
            </div>
            <div className={style.cardInfo}>
                {props.item.segments.map(segments => <div className={style.cardRow}>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>{segments.origin} – {segments.destination}</div>
                        <div className={style.cardColBot}>10:45 – 08:00</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>В пути</div>
                        <div className={style.cardColBot}>{getTimeFromMins(segments.duration)}</div>
                    </div>
                    <div className={style.cardCol}>
                        <div className={style.cardColTop}>{
                            segments.stops.length === 0
                                ? "Без пересадок"
                                : segments.stops.length === 1
                                    ? segments.stops.length + " Пересадка"
                                    : segments.stops.length >= 2
                                        ? segments.stops.length + " Пересадки" : ""
                        }</div>
                        <div className={style.cardColBot}>{segments.stops.join(",")}</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}