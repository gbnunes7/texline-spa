interface titleProps {
	children: string;
}

const Title: React.FC<titleProps> = ({ children }) => {
	return <h1 className="text-2xl">{children.toUpperCase()}</h1>;
};

export default Title;
