import "./index.css";
import { Link } from 'react-router-dom';
function SideNav() {
    return (
        <div className="side flex">
            <Link className="nav-item flex center-center" to={'/'}>主页</Link>
            <Link className="nav-item flex center-center" to={'/'}>主页</Link>
            <Link className="nav-item flex center-center" to={'/'}>主页</Link>
            <Link className="nav-item flex center-center" to={'/'}>主页</Link>
        </div>
    )
}

export default SideNav