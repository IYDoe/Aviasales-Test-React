import * as axios from 'axios'

// const axios = require('axios');

export default function getTickets() {
    return axios.get('https://front-test.beta.aviasales.ru/search')
        .then(response => {
            const sId = response.data.searchId
            return axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${sId}`)
                .then(response => {
                    setCards(response.data.tickets)
                })

        })
}


