import React from "react";
<link
	rel='stylesheet'
	href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
	integrity='sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=='
	crossorigin='anonymous'
	referrerpolicy='no-referrer'
/>;
export default function Footer(props) {
	const { showModal, handleToggleModal, data } = props;

	return (
		<footer>
			<div className='bgGradient'></div>
			<div>
				<h2>{data?.title}</h2>
				<h1>APOD</h1>
			</div>
			<button onClick={handleToggleModal}>
				<i className='fa-solid fa-circle-info'></i>
			</button>
		</footer>
	);
}
