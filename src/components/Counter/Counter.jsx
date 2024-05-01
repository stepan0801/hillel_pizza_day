import { useState } from "react";

const Counter = () => {
	const [value, setValue] = useState(0)
	const handleClickPlus = () => {
		setValue((prevState) => prevState + 1)
		console.log('click');
	}
	const handleClickMinus = () => {
		setValue((prevState) => prevState - 1)
	}
	const handleDelete = (e) => {
		e.target.closest('.counter').previousElementSibling.style.display = 'block'
		e.target.closest('.counter').style.display = 'none'
		setValue(0)
	}

	return (
		<div className="counter">
			<div className="counter__action">
				<button disabled={value < 1 ? true : false} onClick={handleClickMinus} className="counter__count">-</button>
				<p className="counter__value">{value}</p>
				<button onClick={handleClickPlus} className="counter__count">+</button>
			</div>
			<div className="counter__delete">
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	)
}

export default Counter