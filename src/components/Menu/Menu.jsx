import MenuList from "./MenuList";
import { useEffect, useState } from "react";

const Menu = () => {

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
		<div>
			<MenuList menu={menu} />
		</div>
	)
}

export default Menu