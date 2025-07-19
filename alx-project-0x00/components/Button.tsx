interface ButtonProps {
	title: string;
	styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles = "" }) => {
	return <button className={`${styles}`}>{title}</button>;
};

export default Button;
