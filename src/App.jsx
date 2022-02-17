import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Music from "./components/Music";
import Footer from "./components/Footer";
import routes from "./utils/routes";
import { useEffect } from "react";
import { throttle } from "./utils/utils";

function App() {
  let route = useRoutes(routes);
  let location = useLocation();
  useEffect(() => {
    let body = document.body;
    const setRotation = throttle(function (e) {
      let center = [window.innerWidth / 2, window.innerHeight / 2];
      let offsetX = ((e.clientX - center[0]) / window.innerWidth) * 90;
      let offsetY = ((e.clientY - center[1]) / window.innerHeight) * 90;
      body.style.setProperty("--skew-x", -offsetX + "deg");
      body.style.setProperty("--skew-y", offsetY+ "deg");
    },200);
    document.onmousemove = function (e) {
      setRotation(e);
    };
    return () => {
      document.onmousemove = null;
    }
  }, []);
  return (
    <>
      <Header />
      <SideNav />
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          key={location.pathname}
          classNames="fade"
          unmountOnExit={true}
        >
          {route}
        </CSSTransition>
      </TransitionGroup>
      <Music />
      <Footer />
    </>
  );
}

export default App;
