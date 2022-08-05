import { useState } from "react";

function ContactList({ contacts }) {
	const [filterText, setFilterText] = useState("");

	const filteredText = contacts.filter((item) =>
		Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filterText.toLocaleLowerCase())
		)
	);
	return (
		<div>
			<input
				placeholder="Filter Contact"
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
			/>
			<ul className="list">
				{filteredText.map((contact, i) => (
					<li key={i}>
						<span>{contact.fullname}</span>
						<span>{contact.phone_number}</span>
					</li>
				))}
			</ul>
			<p>Total Contacts: {filteredText.length} </p>
		</div>
	);
}

export default ContactList;
