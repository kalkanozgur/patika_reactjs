import { useState } from "react";

function Input() {
	const [form, setForm] = useState({ name: "", surname: "" });
	const onChangeInput = (e) => {
		console.log(e.target);
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		<div>
			Name
			<br />
			<input name="name" value={form.name} onChange={onChangeInput} />
			<br />
			Surname
			<br />
			<input name="surname" value={form.surname} onChange={onChangeInput} />
			<br />
			<h1>
				{form.name} {form.surname}
			</h1>
		</div>
	);
}

export default Input;
