import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("Özgür");
	const [age, setAge] = useState(30);
	const [friends, setFriends] = useState(["Ahmet", "Cem"]);
	return (
		<div className="App">
			<h1>Merhaba {name}</h1>
			<h1>{age}</h1>
			<button onClick={() => setName("Ahmet Özgür")}>Change name </button>
			<br />
			<button onClick={() => setAge(31)}>Change age </button>
			<hr />
			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}>{friend} </div>
			))}
			<br />
			<button onClick={() => setFriends([...friends, "Düşün"])}>
				Add new friend{" "}
			</button>
		</div>
	);
}

export default App;
