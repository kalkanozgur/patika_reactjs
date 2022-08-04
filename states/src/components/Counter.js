import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);

	const increase = () => setCounter(counter + 1);
	const decrease = () => setCounter(counter - 1);
	return (
		<div>
			<h1>{counter}</h1>
			<br />
			<button onClick={decrease}>Decrease</button>
			<span />
			<button onClick={increase}>Increase</button>
		</div>
	);
}

export default Counter;
