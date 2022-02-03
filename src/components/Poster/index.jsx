import { useState,useEffect } from "react";
import "./index.css";
export default function Poster(props) {
  let [isLoad, setIsLoad] = useState(false);
  let [img,setImg] = useState(new Image());
  img.src = props.url;
  img.style.width = "100%";
  img.onload =  function () {
    setIsLoad(true);
  };
  useEffect(() => {
    return ()=> {
      img.onload = null;
    }
  },[])
  return (
    <div className={isLoad ? "poster" : "loading"}>
      {isLoad ? (
        <a href={props.to}>
          <img src={props.url} width={"100%"} alt="background" />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
