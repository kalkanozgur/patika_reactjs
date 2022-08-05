import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
	const [contacts, setContacts] = useState([
		{ fullname: "Ahmet", phone_number: "123456789" },
		{ fullname: "Cem", phone_number: "14124512" },
		{ fullname: "Düşün", phone_number: "43262346" },
		{ fullname: "Onur", phone_number: "2141245" },
	]);
	// useEffect(() => {
	// 	//sdaf
	// 	console.log(contacts);
	// }, [contacts]);
	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
