import React from "react";

const todos = [
	{
		status: "complated",
		title: "Learn JavaScript",
	},
	{
		status: "uncomplated",
		title: "Learn React",
	},
	{
		status: "uncomplated",
		title: "Have a life!",
	},
];

function ToDoList() {
	return (
		<ul className="todo-list">
			{todos.map((todo, i) => {
				return (
					<li key={i}>
						<div className={"view"}>
							<label htmlFor={todo.title}>{todo.title}</label>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default ToDoList;
