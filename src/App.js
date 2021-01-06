import "./App.css";
import Heores from "./components/Heores";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeroesProvider from "./context/heroesContext";
import Dashboard from "./components/Dashboard";
import HeroDetails from "./components/HeroDetails";

function App() {
  const title = "Tour of Heroes";
  return (
    <HeroesProvider>
      <Router>
        <div>
          <h1>{title}</h1>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/heroes">Heroes</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/heroes">
            <Heores />
          </Route>
          <Route path="/detail/:id">
            <HeroDetails />
          </Route>
          <Route exact path="/detail">
            <h3>Please select a hero.</h3>
          </Route>
        </Switch>
      </Router>
    </HeroesProvider>
  );
}

export default App;
