import React, { useState, useEffect } from 'react'
import Card from './Card'
import * as axios from 'axios'


export default function CardContainer() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {

        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response => {
                const sId = response.data.searchId
                axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${sId}`)
                    .then(response => response.data.tickets)
                    .then(
                        (result) => {
                            setIsLoaded(true);
                            setItems(result);
                        },
                        (error) => {
                            setIsLoaded(true);
                            setError(error);
                        }
                    )
            })
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <Card
                        data={item}
                        price={item.price}
                        segments={item.segments}

                    />
                ))}

            </div>
        )
    }
}