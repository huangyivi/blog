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
    </>
  );
}

export default Home;
