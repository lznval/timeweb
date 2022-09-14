const Statistic = (labels: any) => {
    return (
        <section className="statistic">
            <div className="statistic__items">
                {labels && labels.labels.labels.map((item: any, key: any) => (
                    <div className="statistic__item" key={key}>
                        <div className="statistic__item-count">{item.title}</div>
                        <div className="statistic__item-text">{item.subtitle}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Statistic;