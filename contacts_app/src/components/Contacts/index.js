import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
	const [contacts, setContacts] = useState([
		{ fullname: "Ahmet", phone_number: "123456789" },
		{ fullname: "Cem", phone_number: "14124512" },
		{ fullname: "Düşün", phone_number: "43262346" },
		{ fullname: "Onur", phone_number: "2141245" },
	]);
	useEffect(() => {
		//sdaf
	}, [contacts]);
	return (
		<div>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
