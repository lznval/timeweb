/* eslint-disable @next/next/no-img-element */
const Description = (info: any) => {
    return (
        <section className="description">
            <div className="description__items">
                {info && info.info.info.map((item: any, key: any) => (
                    <div className="description__item" key={key}>
                        <div className="description__item-img">
                            <img src={item.image === "#" ? '/timeweb.jpg' : item.image} alt="Image" />
                        </div>
                        <div className="description__item-info">
                            <div className="description__item-info--title">{item.title}</div>
                            <div className="description__item-info--text">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Description;