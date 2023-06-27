export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card"> 
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../images/${props.img}`} />
            
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />            
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </section>

    )
}