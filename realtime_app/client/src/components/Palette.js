import { useState } from "react";

import { send } from "../SocketApi";

function Palette() {
	const [color, setColor] = useState("#000");

	return (
		<div className="palette">
			<input
				type="color"
				value={color}
				onChange={(e) => {
					setColor(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					send(color);
				}}
			>
				click
			</button>
			{color}
		</div>
	);
}

export default Palette;
