import "./index.css";
import icon from "../../static/imgs/icon.png";

function Header() {
    return (
        <div className="header-area flex center-center">
            <div className="header-title">
                闲来
            </div>
            <img className="header-logo" draggable="false" src={icon} alt="logo" />
            <div className="header-title">
                食茶
            </div>
        </div>
    )
}

export default Header