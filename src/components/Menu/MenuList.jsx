import MenuItem from "./MenuItem";
const MenuList = (menu) => {
	const pizzasList = menu.menu
	return (
		<ul>
			{pizzasList.map((pizza, ind) => {
				return (<MenuItem key={ind} pizzas={pizza} />)
			})}

		</ul>
	)
}

export default MenuList