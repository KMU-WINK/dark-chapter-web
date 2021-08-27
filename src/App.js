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
          <Switch>
              <Route exact path="/" component={Landing_1}></Route>
              <Route  path="/login" component={Login_1}></Route>
              <Route exact path = "/signup" component={Signup_1}></Route>
              <Route  path = "/signup/password" component={Signup_2}></Route>
              <Route  path = "/signup/nickname" component={Signup_4}></Route>

              <Route  exact path = "/resetPassword" component={ResetPassword_1}></Route>
              <Route  path = "/resetPassword/pwd" component={ResetPassword_2}></Route>

              <Route exact path = "/resetNickname/pwd" component={ResetNickname_2}></Route>
          </Switch>
          {/*<Route path = '/appLock' component={AppLock}/>*/}
  </div>)
}

export default App;
