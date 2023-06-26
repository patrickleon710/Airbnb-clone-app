export default function Card() {
    return (
        <section className="card"> 
            <img className="card--image" src="../images/katie-zaferes.png" />
            
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />
                <span>5.0</span>
                <span>(6)</span>
                <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </section>

    )
}