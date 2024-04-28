import MenuItem from "./MenuItem";
import pizzas from "../../data";
const MenuList = () => {

	return (
		<ul>
			{pizzas.map((pizza, ind) => {
				return (<MenuItem key={ind} pizzas={pizza} />)
			})}

		</ul>
	)
}

export default MenuList