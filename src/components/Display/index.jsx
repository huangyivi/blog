import { useEffect, useRef } from "react";

import "./index.css";
function Display(props) {
  let frame = useRef(null);
  useEffect(() => {
    frame.current.style.height = (frame.current.clientWidth * 9) / 16 + "px";
  }, [props]);
  return (
    <div className="display-main flex col center-center">
      <div className="display-area flex center-center">
        <iframe
          ref={frame}
          className="display-iframe"
          src={props.url}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="user-panel flex col center-center">
        <div>效果 ： Sliding</div>
        <div>
          指路👉 ：
          <a className="user-link" href={props.url}>
            {props.url}
          </a>
        </div>
        <div>简介 : {props.intro}</div>
      </div>
    </div>
  );
}

export default Display;
