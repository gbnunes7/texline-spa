import { ReactNode } from "react";

interface sectionProps {
    children: ReactNode
}
const Section: React.FC<sectionProps> = ({children}) => {
	return (
		<section className="flex gap-16 justify-center items-center w-full px-96 min-h-[430px]">
            {children}
		</section>
	);
};

export default Section;
