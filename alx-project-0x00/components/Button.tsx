interface ButtonProps {
	title: string;
	size?: "small" | "medium" | "large";
	rounded?: "sm" | "md" | "full";
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	title,
	size = "medium",
	rounded = "md",
	className = "",
}) => {
	const sizeClasses = {
		small: "px-3 py-1 text-sm",
		medium: "px-5 py-2 text-base",
		large: "px-7 py-3 text-lg",
	};

	const roundedClasses = {
		sm: "rounded-sm",
		md: "rounded-md",
		full: "rounded-full",
	};

	return (
		<button
			className={`bg-blue-600 text-white ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
		>
			{title}
		</button>
	);
};

export default Button;
