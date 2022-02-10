import Poster from "../../components/Poster";
import UserPanel from "../../components/UserPanel";
import "./index.css";
function Home() {
  return (
    <>
      <UserPanel />
      <div className="content-area flex wrap around-start">
        <Poster to="/kobe" url="http://175.178.73.171/static/imgs/kobe.jpg" />
        <Poster
          to="/hit_it"
          url="http://175.178.73.171/static/imgs/allen.jpg"
        />
      </div>
    </>
  );
}

export default Home;
