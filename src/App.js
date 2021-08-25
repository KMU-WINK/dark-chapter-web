import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './component/MenuBar';
import {Palette} from "./components/Palette";
import {
    AppLock
} from './pages';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Palette/>
      <Router>
          <Route path = '/appLock' component={AppLock}/>
      </Router>
    </div>
  );
}

export default App;
