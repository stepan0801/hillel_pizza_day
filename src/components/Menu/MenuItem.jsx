// import Counter from "../Counter/Counter";
import { useState } from "react";
import Button from "../Button/Button";
const MenuItem = ({ pizzas }) => {
	const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizzas

	const [value, setValue] = useState(0)
	const [state, setState] = useState(false)
	const handleClick = () => {
		setState(true)
	}
	const handleClickPlus = () => {
		setValue((prevState) => prevState + 1)
	}
	const handleClickMinus = () => {
		setValue((prevState) => prevState - 1)
	}
	const handleDelete = () => {
		setValue(0)
		setState(false)
	}
	if (state) {
		return (
			<li className="pizza" key={id}>
				<img src={imageUrl} className="pizza__image" />
				<div className="pizza__info">
					<p className="pizza__name">{name}</p>
					<p className="pizza__ingredients">{ingredients.join()}</p>
					<div className="pizza__actions">
						{
							!soldOut ?
								<>
									<div className="counter">
										<div className="counter__action">
											<Button disabled={value < 1 ? true : false} onClick={handleClickMinus} className="counter__count" text="-" />
											<p className="counter__value">{value}</p>
											<Button onClick={handleClickPlus} className="counter__count" text="+" />
										</div>
										<div className="counter__delete">
											<Button onClick={handleDelete} text="delete" />
										</div>
									</div>
								</>
								: <p className="pizza__price">Sold out</p>}
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
					{
						!soldOut ?
							<>
								< p className="pizza__price">{unitPrice}</p>
								<Button className="button" onClick={handleClick} text="Add to cart" />
							</>
							: <p className="pizza__price">Sold out</p>}
				</div>
			</div>
		</li>
	)


}


export default MenuItem