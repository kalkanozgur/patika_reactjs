import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("Özgür");
	const [age, setAge] = useState(30);
	const [friends, setFriends] = useState(["Ahmet", "Cem"]);
	const [adress, setAdress] = useState({
		title: "Antalya",
		zip: "07070",
	});
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
				Add new friend
			</button>

			<hr />
			<br />
			<h2>Adress</h2>
			<div>
				{adress.title} {adress.zip}
			</div>
			<br />
			<button
				onClick={() =>
					setAdress({
						title: "İzmir",
						zip: parseInt("35035"),
					})
				}
			>
				Set adress to İzmir
			</button>
			<br />

			<button onClick={() => setAdress({ ...adress, title: "İzmir/Bornova" })}>
				Set adress to İzmir Bornova not zip
			</button>
		</div>
	);
}

export default App;
