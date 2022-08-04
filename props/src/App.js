import "./App.css";
import User from "./components/User";

const friends = [
	{
		id: 1,
		name: "Ahmet",
	},
	{
		id: 2,
		name: "Salih",
	},
	{
		id: 3,
		name: "Cem",
	},
	{
		id: 4,
		name: "Düşün",
	},
	{
		id: 5,
		name: "Onur",
	},
	{
		id: 6,
		name: "Işıl",
	},
	{
		id: 7,
		name: "Kutay",
	},
];

function App() {
	return (
		<div className="App">
			<User
				name={"Özgür"}
				surName={"KALKAN"}
				isLoggedIn={true}
				age={30}
				friends={friends}
			/>
		</div>
	);
}

export default App;
