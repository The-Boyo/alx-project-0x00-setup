import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
	return (
		<div>
			<h1 className=" text-xl font-extralight">Landing Page</h1>
			<Card />
			<Card />
			<Card />
			<Button title="Small" styles="rounded-sm text-sm p-3" />
			<Button title="Medium" styles="rounded-md text-sm p-3" />
			<Button title="Medium" styles="rounded-md text-md p-3" />
			<Button title="Large" styles="rounded-lg text-lg p-3" />
		</div>
	);
};
export default Landing;
