import ListItem from "../listItem";

interface HeaderProps {
	src: string;
	alt: string;
}

const Header: React.FC<HeaderProps> = ({ src, alt }) => {
	return (
		<header className={`flex justify-between items-center min-h-[100px]`}>
			<img src={src} alt={alt} className="max-w-[170px]" />
			<nav>
				<ul className="flex gap-16">
					<ListItem>                        
                        Home
                    </ListItem>
                    <ListItem>
                        Quem somos
                    </ListItem>
                    <ListItem>
                        Produtos
                    </ListItem>
                    <ListItem>
                        Contato
                    </ListItem>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
