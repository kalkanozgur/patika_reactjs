import React from "react";

function ContactList({ contacts }) {
	return (
		<div>
			<ul>
				{contacts.map((contact, i) => (
					<li key={i}>{contact.fullname}</li>
				))}
			</ul>
		</div>
	);
}

export default ContactList;
