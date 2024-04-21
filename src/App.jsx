
import './App.css'
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
// import Button from './components/Button/Button';
function App() {


	return (
		<div className='wrapper'>
			<Header></Header>
			<main className="content">
				<h1 className="title">The best pizza.<br /><span className="text-yellow">Straight out of the oven, straight to you.</span>
				</h1>
				<p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
				<Form className="login-form"></Form>
			</main>
		</div>
		// <div>
		// 	<h1>Hello world</h1>
		// 	<Button text='button' type='submit' count='123' />
		// </div>

	)
}

export default App
