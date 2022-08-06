import { useState, useEffect } from "react";

import "./App.css";

import Footer from "./components/Footer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	const [todos, setTodos] = useState([
		{
			completed: true,
			title: "Learn JavaScript",
			id: 1,
		},
		{
			completed: false,
			title: "Learn React",
			id: 2,
		},
		{
			completed: false,
			title: "Have a life!",
			id: 3,
		},
	]);
	const [status, setStatus] = useState("");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case "completed":
					setFilteredTodos(todos.filter((todo) => todo.completed === true));
					break;
				case "active":
					setFilteredTodos(todos.filter((todo) => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};
		filterHandler();
	}, [todos, status]);

	return (
		<div className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<Form todos={todos} setTodos={setTodos} />
			</header>
			<div className="main">
				<ul className="todo-list">
					{filteredTodos.map((todo) => {
						return (
							<ToDoList
								status={status}
								key={todo.id}
								todo={todo}
								title={todo.title}
								todos={todos}
								setTodos={setTodos}
							/>
						);
					})}
				</ul>
			</div>
			<div className="footer">
				<Footer
					status={status}
					setStatus={setStatus}
					todos={todos}
					setTodos={setTodos}
				/>
			</div>
		</div>
	);
}

export default App;
