import "./index.css";
function UserPanel() {
    return (
        <div className="user-panel flex col center-center">
            <div className="user-avatar"></div>
            <div>Owner : Yivi</div>
            <div>Github : <a className="user-link" href="https://github.com/huangyivi">https://github.com/huangyivi</a></div>
            <div style={{textAlign: 'center'}}>Fav : Swatow Changfeng , Tea , Basketball , Avril Lavigne , Kobe Bryant , Derrik Rose</div>
            <div>Have fun :) 闲来喝茶</div>
        </div>
    )
}

export default UserPanel;