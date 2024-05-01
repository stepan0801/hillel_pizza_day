import Counter from "../Counter/Counter";
const MenuItem = ({ pizzas }) => {
	const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizzas
	const handleClick = (e) => {
		e.target.nextElementSibling.style.display = 'flex'
		e.target.style.display = 'none'
	}

	return (
		<li className="pizza" key={id}>
			<img src={imageUrl} className="pizza__image" />
			<div className="pizza__info">
				<p className="pizza__name">{name}</p>
				<p className="pizza__ingredients">{ingredients.join()}</p>
				<div className="pizza__actions">
					{!soldOut ? <><p className="pizza__price">{unitPrice}</p>
						<button className="button" onClick={handleClick}>Add to cart</button>
						<Counter /> </> : <p className="pizza__price">Sold out</p>}
				</div>
			</div>
		</li>
	)
}

export default MenuItem