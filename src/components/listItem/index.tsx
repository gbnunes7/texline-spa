interface IListItem {
    children: React.ReactNode
}

const ListItem:React.FC<IListItem>  = ({children}) => {
    return (
        <li className="text-sm text-black">
            {children}
        </li>
    )
}

export default ListItem