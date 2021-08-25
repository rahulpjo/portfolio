import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Work from "./screens/Work/Work";
import Contact from "./screens/Contact/Contact";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProjectDetail from "./screens/ProjectDetail/ProjectDetail";
import { AnimatePresence } from "framer-motion";
import Resume from "./screens/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/project/:id" component={ProjectDetail} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Layout>
    </div>
  );
}

export default App;
