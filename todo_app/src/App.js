import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	return (
		<div className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<Form />
			</header>
			<div className="main">
				<ToDoList />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
