type propsButton = {
	title: string;
	styles?: string;
};

const Button: React.FC<propsButton> = ({ title, styles = "" }) => {
	return <button className={`${styles}`}>{title}</button>;
};

export default Button;
