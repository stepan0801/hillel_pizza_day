import MenuItem from "./MenuItem";
// import pizzas from "../../data";
import { useEffect, useState } from "react";
const MenuList = () => {

	const [menu, setMenu] = useState([])

	useEffect(() => {
		const getAllPizzas = async () => {
			try {
				const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu')
				if (!res.ok) throw new Error('failed to fetch')
				const data = await res.json()
				setMenu(data.data)
				console.log(data);
			} catch (error) { console.log(error.message) }
		}
		getAllPizzas()
	}, [])
	return (
		<ul>
			{menu.map((pizza, ind) => {
				return (<MenuItem key={ind} pizzas={pizza} />)
			})}

		</ul>
	)
}

export default MenuList