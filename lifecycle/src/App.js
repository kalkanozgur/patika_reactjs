import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState("Özgür");
	useEffect(
		() => {
			console.log("Component Mounted");
		},
		[
			//dependency array
		]
	);
	useEffect(() => {
		console.log("Number Component Updated");
	}, [number]);
	useEffect(() => {
		console.log("Name Component Updated");
	}, [name]);
	return (
		<div className="App">
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Click</button>
			<hr />

			<h1>{name}</h1>
			<button onClick={() => setName("Ahmet Özgür")}>Click</button>
		</div>
	);
}

export default App;
