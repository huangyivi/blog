import { useState,useRef } from "react";
import Poster from "../Poster";
import left from "../../static/imgs/left.svg";
import right from "../../static/imgs/right.svg";
import { throttle } from "../../utils/utils";
import "./index.css";
const imgs = [
  {
    to: "/kobe",
    url: "http://yivi.space/static/imgs/kobe.jpg",
  },
  {
    to: "/hit_it",
    url: "http://yivi.space/static/imgs/allen.jpg",
  },
  {
    to: "/bingdundun",
    url: "http://yivi.space/static/imgs/bingdundun.jfif",
  },
];
function PosterScroller() {
  const [idx, setIdx] = useState(0);
  let poster = useRef(null)
  const go = throttle(function (direction) {
    poster.classList.add('content-animate')
    setTimeout((poster) => {
        poster.classList.remove('content-animate')
    }, 600,poster);
    if (direction) {
      // 向右
      setIdx(idx < imgs.length - 1 ? idx + 1 : 0);
    } else {
      setIdx(idx > 0 ? idx - 1 : imgs.length - 1);
    }
  }, 1000);
  return (
    <div className="scroller-container flex around-center">
      <div className="arrow" onClick={go.bind(null, false)}>
        <img src={left} alt="" />
      </div>
      <div ref={(ref) => poster = ref} onTouchMove={go.bind(null,true)} className="content-area flex center-center">
        <Poster
          to={imgs[idx].to}
          url={imgs[idx].url}
        />
      </div>
      <div className="arrow">
        <img src={right} alt="" onClick={go.bind(null, true)} />
      </div>
    </div>
  );
}

export default PosterScroller;
