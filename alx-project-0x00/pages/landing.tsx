import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
	return (
		<div>
			<h1 className=" text-xl font-extralight">Landing Page</h1>
			<Card />
			<Card />
			<Card />
			<Button title="Small" size="small" rounded="sm" />
			<Button title="Medium" size="small" rounded="md" />
			<Button title="Medium" size="medium" rounded="md" />
			<Button title="Large" size="large" rounded="full" />
		</div>
	);
};
export default Landing;
