/* eslint-disable @next/next/no-img-element */
const Comments = (comments:any) => {
    const starRating = (number: any) => {
		let arr = [];
		for (let index = 1; index <= number; index++) {
			arr.push(<div className="comments__rating-star" key={index}>
				<img src="/star.svg" alt="Star" />
			</div>
			)
		}
		return arr;
	}
    return (
        <section className="comments">
            <div className="comments__items">
                {comments && comments.comments.comments.map((item:any, key:any) => (
                    <div className="comments__item" key={key}>
                        <div className="comments__rating">
                            {starRating(item.rating)}
                        </div>
                        <div className="comments__text">{item.text}</div>
                        <div className="comments__profile">
                            <div className="comments__profile-avatar">
                                <img src={item.user.image === "#" ? "/Avatar.svg" : item.user.image} alt="Avatar" />
                            </div>
                            <div className="comments__profile-name">{item.user.name}</div>
                            <div className="comments__profile-profession">{item.user.profession}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comments;