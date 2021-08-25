import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './component/MenuBar';
import {Palette} from "./components/Palette";
import {
    AppLock
} from './pages';
import Sympathy from "./pages/Sympathy";
import Progress from "./pages/Progress";

function App() {
  return <>
      {/*<Menu/>*/}
      {/*  <Palette/>*/}
        <Sympathy/>
      <Progress/>
      <Router>
          <Route path = '/appLock' component={AppLock}/>
      </Router>
  </>
}

export default App;
