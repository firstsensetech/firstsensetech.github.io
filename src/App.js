import './App.css';
import './styles/style.css'
import Home from './components/Home/Home';
import LearnMore from './components/LearnMore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/learn-more">
            <LearnMore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
