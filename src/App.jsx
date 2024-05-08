import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";
function App() {

	return (
		<div className='wrapper'>
			<Header></Header>
			<main className="content">
				<h1 className="title">The best pizza.<br /><span className="text-yellow">Straight out of the oven, straight to you.</span>
				</h1>
				<p className="sub-title">👋 Welcome! Please start by telling us your name:</p>

				<Routes>
					<Route path="/authorize" element={<Form />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
