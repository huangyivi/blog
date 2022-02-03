import { useEffect } from "react";
import "./index.css";

function Footer() {
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
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
        let prev = item.previousElementSibling || null;
        let next = item.nextElementSilbling || null;

        let baseScale = 0.6;
        reset();
        if (prev) {
          prev.style.setProperty("--scale", 1 + Math.abs(1 - offset));
        }
        item.style.setProperty("--scale", 1 + baseScale);
        if (next) {
          next.style.setProperty("--scale", 1 + offset);
        }
      });
    });
    document.querySelector(".dock").addEventListener("mouseleave", function () {
      reset();
    });
  }, []);
  return (
    <div className="dock-area flex col center-center">
      <div className="dock flex center-center">
        <span className="dock-item">H</span>
        <span className="dock-item">U</span>
        <span className="dock-item">A</span>
        <span className="dock-item">N</span>
        <span className="dock-item">G</span>
        <span className="dock-item">Y</span>
        <span className="dock-item">I</span>
        <span className="dock-item">V</span>
        <span className="dock-item">I</span>
      </div>
    </div>
  );
}

export default Footer;
