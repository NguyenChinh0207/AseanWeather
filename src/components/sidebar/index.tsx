import React from 'react';
import { Link } from 'react-router-dom';
interface ISidebar {
    categories: any
}
interface ICategory {
    id: number;
    name: string;
}
const Sidebar: React.FC<ISidebar> = ({categories}) => {

    return (
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Category</li>
            {
                categories.map((item: ICategory)=>{
                    return (<li className="list-group-item" key={item.id}><Link to={`/categories/${item.id}/products`}>{item.name}</Link></li>);
                })
            }
        </ul>
    );
}
export default Sidebar;