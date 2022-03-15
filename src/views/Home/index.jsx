import Poster from "../../components/Poster";
import UserPanel from "../../components/UserPanel";
import "./index.css";
function Home() {
  return (
    <>
      <UserPanel />
      <div className="content-area flex wrap around-start">
        <Poster to="/kobe" url="http://yivi.space/static/imgs/kobe.jpg" />
        <Poster
          to="/hit_it"
          url="http://yivi.space/static/imgs/allen.jpg"
        />
        <Poster to="/bingdundun" url="http://yivi.space/static/imgs/bingdundun.jfif"/>
      </div>
      <div className="flex center-center" style={{height: 20,marginTop: 30}}><a style={{color: 'white',textDecoration: 'none',textShadow: '1px 1px 1px black'}} href="https://beian.miit.gov.cn">备案号：粤ICP备2022015529号</a></div>
    </>
  );
}

export default Home;
