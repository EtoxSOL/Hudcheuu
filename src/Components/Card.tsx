// Components that shows the 3 collections
// props.item allows me to retrieve data for each collection

export default function Card(props: any) {
    return (
        <div className='card'>
            <div className='card-banner'>
                <img src={`.${props.item.banner}`} className='card-banner'/>
            </div>
            <div className='card--main'>
            <div className='card--image'>
                <img src={`.${props.item.img1}`} alt=''/>
            </div>
            <div className='card--text'>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
                <a href={props.item.link} target='_blank' className="card--button">View on Opensea</a>
            </div>
            </div>
        </div>
    )
}