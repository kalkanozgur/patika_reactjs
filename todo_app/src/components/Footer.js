import React from "react";

function Footer() {
	return (
		<div>
			<span className="todo-count">
				<strong>2</strong>" items left "
			</span>
			<ul className="filters">
				<li className="selected">
					<a href="#/">All</a>
				</li>
				<li>
					<a href="#/">Active</a>
				</li>
				<li>
					<a href="#/">Complated</a>
				</li>
			</ul>
			<button className="clear-complated">Clear complated</button>
		</div>
	);
}

export default Footer;
