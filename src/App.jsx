import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Music from "./components/Music";
import Footer from "./components/Footer";
import routes from "./utils/routes";

function App() {
  let route = useRoutes(routes);
  let location = useLocation()
  return (
    <>
      <Header />
      <SideNav />
      <TransitionGroup>
        <CSSTransition timeout={1000} key={location.pathname} classNames='fade' unmountOnExit={true}>{route}</CSSTransition>
      </TransitionGroup>
      <Music />
      <Footer />
    </>
  );
}

export default App;
