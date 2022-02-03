import { useState,useEffect } from "react";
import "./index.css";
import playIcon from "../../static/imgs/play.svg";
import pauseIcon from "../../static/imgs/pause.svg";
function Music() {
  let [isPlay, setIsPlay] = useState(false);
  let url = "http://175.178.73.171/static/music/bg.mp3";
  let [music, setMusic] = useState(new Audio());
  music.src = url;
  music.loop = true;
  const switchMusic = function () {
    setIsPlay(!isPlay);
  };
  useEffect(() => {
    isPlay ? music.play() : music.pause();
  }, [isPlay]);

  return (
    <div
      className={isPlay ? "music-box play" : "music-box"}
      onClick={switchMusic}
    >
      {isPlay ? <img src={playIcon} /> : <img src={pauseIcon} />}
    </div>
  );
}

export default Music;
