import Card from './Card'



export default function CardContainer(props) {

    return (
        <div>
            {props.sortTickets.map(item => <Card item={item} />)}
        </div>
    )
}
