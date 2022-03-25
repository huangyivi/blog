import PosterScroller from "../../components/PosterScroller";
import UserPanel from "../../components/UserPanel";
import Title from "../../components/Title";

import "./index.css";
function Home() {
  return (
    <>
      <Title />
      <UserPanel />
      <PosterScroller />
      <div className="flex center-center" style={{ height: 20, marginTop: 30 }}>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            textShadow: "1px 1px 1px black",
          }}
          href="https://beian.miit.gov.cn"
        >
          备案号：粤ICP备2022015529号
        </a>
      </div>
    </>
  );
}

export default Home;
