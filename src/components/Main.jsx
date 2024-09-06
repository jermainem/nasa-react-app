import image from "../assets/Screenshot 2024-09-03 at 10.24.30 PM.png";

export default function Main(props) {
	const { data } = props;

	return (
		<div>
			<img
				className='bgImage'
				src={data?.hdurl}
				alt={data.title || "bg-img"}
			/>
		</div>
	);
}
