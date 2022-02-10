import "./index.css";
import { Link } from 'react-router-dom';
import routes from "../../utils/routes";
function SideNav() {
    return (
        <div className="side flex">
            {
                routes.map((item) => (<Link className="nav-item flex center-center" key={item.name} to={item.path}>{item.name}</Link>))
            }
        </div>
    )
}

export default SideNav