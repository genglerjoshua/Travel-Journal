const data = [
    {
        id: 1,
        location: "Australia",
        image: "opera.png",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
        site: "Sydney Opera House",
        dates: "27 May, 2021 - 8 Jun, 2021",
    },
    {
        id: 2,
        location: "Japan",
        image: "fuji.png",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        site: "Mount Fuji",
        dates: "12 Jan, 2021 - 24 Jan, 2021",
    },
    {
        id: 3,
        location: "Norway",
        image: "fjord.png",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        site: "Geirangerfjord",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
    }
]

function Navbar() {
    return (
        <nav className="navbar">
            <img src="./images/globe.png" className="nav-img" />
            <span className="nav-text">my travel journal.</span>
        </nav>
    )
}

function Card(props) {
    return (
        <article className="card">
            <img src={`./images/${props.image}`} className="card-img" />
            <div className="card-content">
                <div className="card-head">
                    <img src="./images/pin.png" className="card-pin" />
                    <h2>{props.location}</h2>
                    <h3>View on Google Maps</h3>
                </div>
                <h1>{props.site}</h1>
                <h4>{props.dates}</h4>
                <p>{props.description}</p>
            </div>
        </article>
    )
}

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    }
    )
    return (
        <main>
            <Navbar />
            <section className="card-section">
                {cards}
            </section>
        </main>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))