import { useEffect } from "react";
import "./index.css";

function Title() {
  useEffect(() => {
    const spans = document.querySelectorAll(".dock-item");
    const reset = function () {
      spans.forEach((item) => {
        item.style.setProperty("--scale", 1);
      });
    };
    spans.forEach((span) => {
      span.addEventListener("mouseover", function (e) {
        let item = e.target;
        // let itemRect = item.getBoundingClientRect();
        // let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
        // let prev = item.previousElementSibling || null;
        // let next = item.nextElementSilbling || null;

        let baseScale = 0.1;
        reset();
        // if (prev) {
        //   prev.style.setProperty("--scale", 1 + Math.abs(0.2 - offset));
        // }
        item.style.setProperty("--scale", 1 + baseScale);
        // if (next) {
        //   next.style.setProperty("--scale", 1 + offset*baseScale);
        // }
      });
    });
    document.querySelector(".dock").addEventListener("mouseleave", function () {
      reset();
    });
  }, []);
  return (
    <div className="dock flex center-center">
      <span className="dock-item">Y</span>
      <span className="dock-item">I</span>
      <span className="dock-item">V</span>
      <span className="dock-item">I</span>
    </div>
  );
}

export default Title;
