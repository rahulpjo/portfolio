import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Work from "./screens/Work/Work";
import Contact from "./screens/Contact/Contact";
function App() {
  let location = useLocation();
  return (
    <div className="App">
      <TransitionGroup>
        {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
        <CSSTransition key={location.key} classNames="fade" timeout={700}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
