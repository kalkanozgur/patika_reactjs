import { useState } from "react";

import { send } from "../SocketApi";

function Palette({ activeColor }) {
	const [color, setColor] = useState("#000");

	return (
		<div className="palette">
			<input
				type="color"
				value={activeColor}
				onChange={(e) => {
					setColor(e.target.value);
					send(color);
				}}
			/>
			{/* <button
				onClick={() => {
					send(color);
				}}
			>
				click
			</button> */}
			{activeColor}
		</div>
	);
}

export default Palette;
