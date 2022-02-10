import "./index.css";
function UserPanel() {
    return (
        <div className="user-panel flex col center-center">
            <div className="user-avatar"></div>
            <div>Owner : Yivi</div>
            <div>Github : <a className="user-link" href="https://github.com/huangyivi">https://github.com/huangyivi</a></div>
            <div>City : Swatow</div>
            <div>- 脚骨折后的常年地板流篮球爱好者</div>
            <div>- 虽然是地板流，但却热爱罗斯和科比的球风</div>
            <div>- 有一点社恐，但是喜欢在买东西的时候和老板扯东扯西</div>
            <div>- 素描爱好者</div>
            <div>- 生活大于一切，努力时别忘了沿途的风景</div>
            <div>Have fun :) 闲来喝茶</div>
        </div>
    )
}

export default UserPanel;