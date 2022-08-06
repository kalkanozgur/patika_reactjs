import { Link, Outlet, useParams } from "react-router-dom";
import { getInvoices, getInvoice } from "../data";

function Invoices() {
	let invoices = getInvoices();
	let params = useParams();
	let invoice = getInvoice(parseInt(params.invoiceId, 10));
	return (
		<div style={{ display: "flex" }}>
			{/* <nav
				style={{
					borderRight: "solid 1px",
					padding: "1rem",
				}}
			>
				{invoices.map((invoice) => (
					<Link
						style={{ display: "block", margin: "1rem 0" }}
						to={`/invoices/${invoice.number}`}
						key={invoice.number}
					>
						{invoice.name}
					</Link>
				))}
			</nav>
			<Outlet /> */}
			<main>
				<div style={{ padding: "1rem" }}>
					<h2>Total Due: {invoice.amount}</h2>
					<p>
						{invoice.name}: {invoice.number}
					</p>
					<p>Due Date: {invoice.due}</p>
				</div>
			</main>
		</div>
	);
}

export default Invoices;
