/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
const MenuItem = ({ pizzas }) => {
	const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizzas
	const handleClick = () => {
		console.log('click');
	}
	if (!soldOut) {
		return (
			<li className="pizza" key={id}>
				<img src={imageUrl} className="pizza__image" />
				<div className="pizza__info">
					<p className="pizza__name">{name}</p>
					<p className="pizza__ingredients">{ingredients.join()}</p>
					<div className="pizza__actions">
						<p className="pizza__price">{unitPrice}</p>
						<button className="button" onClick={handleClick}>Add to cart</button>
					</div>
				</div>
			</li>
		)
	}
	return (
		<li className="pizza" key={id}>
			<img src={imageUrl} className="pizza__image" />
			<div className="pizza__info">
				<p className="pizza__name">{name}</p>
				<p className="pizza__ingredients">{ingredients.join()}</p>
				<div className="pizza__actions">
					<p className="pizza__price">Sold out</p>
				</div>
			</div>
		</li>
	)
}

export default MenuItem