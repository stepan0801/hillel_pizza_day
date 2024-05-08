
import Input from "../Input/Input";
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<header className='header'>
			<a className="logo" href="#">Pizza Day</a>
			<nav className="header__menu">
				<NavLink className="menu__item" to="/authorize">authorize</NavLink>
				<NavLink className="menu__item" to="/menu">menu</NavLink>
			</nav>
			<form>
				<Input placeholder="Search for the order #" />
			</form>
		</header>
	)
}

export default Header