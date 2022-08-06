import React from "react";

function ToDoList({ todos, setTodos, todo }) {
	const isCompleted = () =>
		setTodos(
			todos.map((item) => {
				return item.id === todo.id
					? { ...item, completed: !item.completed }
					: item;
			})
		);

	const deleteItem = () =>
		setTodos(todos.filter((item) => item.id !== todo.id));

	return (
		<li key={todo.id} className={todo.completed ? "completed" : ""}>
			<div className={"view"}>
				<input
					type="checkbox"
					className="toggle"
					// onClick={isCompleted}
					checked={todo.completed}
					onChange={isCompleted}
				/>
				<label onClick={() => {}}>{todo.title}</label>
				<button className="destroy" onClick={deleteItem}></button>
			</div>
		</li>
	);
}

export default ToDoList;
