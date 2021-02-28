import style from './App.module.css'
import Logo from './components/Logo/Logo'
import Button from './components/Button/Button'
import TabsContainer from './components/Tabs/TabsContainer'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter/Filter';
import CardContainer from './components/Cards/Card/CardContainer';
import * as axios from 'axios'


export default function App() {

    const [checkedItems, setCheckedItems] = useState({
        all: false,
        oneStops: false,
        twoStops: false,
        threeStops: false,
        noStops: false
    })

    const [searchId, setSearchId] = useState()
    const [tickets, setTickets] = useState([])
    const [stop, setStop] = useState(false)
    const [sortTickets, setSortTickets] = useState([])


    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response => setSearchId(response.data.searchId))
    }, [])

    useEffect(() => {
        if (stop === true) {
            setSortTickets(tickets.slice(0, 5))
        }
    }, [stop, tickets])

    useEffect(() => {

        if (searchId && stop === false) {
            function getTickets() {
                fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
                    .then(data => {
                        if (data.status === 500) {
                            getTickets()
                        } else {
                            return data.json()
                        }
                    })
                    .then(ticketsPart => {
                        console.log("ticketsPart:", ticketsPart)
                        if (ticketsPart.stop) {
                            setStop(true)
                        }
                        setTickets([...tickets, ...ticketsPart.tickets])
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
            getTickets()
        }

    }, [searchId, tickets, stop])

    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked })
    }

    return (
        <div className={style.container}>
            <header className={style.header}>
                <Logo />
            </header>
            <main className={style.appContent}>
                <div className={style.appContentLeft}>
                    <Filter handleChange={handleChange} />
                </div>
                <div className={style.appContentRight}>
                    <TabsContainer />
                    <CardContainer sortTickets={sortTickets} />
                    <Button />
                </div>
            </main>
        </div>

    )
}

