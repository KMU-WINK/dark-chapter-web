import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Menu from './component/MenuBar';
import {Palette} from "./components/Palette";
import {
    AppLock
} from './pages';
import Landing_1 from "./pages/Landing_1";
import Signup_1 from "./pages/Signup_1";
import Login_1 from "./pages/Login_1";
import Signup_2 from "./pages/Signup_2";
import Signup_4 from "./pages/Signup_4";
import ResetPassword_1 from "./pages/ResetPassword_1";
import ResetPassword_2 from "./pages/ResetPassword_2";
import ResetNickname_2 from "./pages/ResetNickname_2";
import ResetNickname_1 from "./pages/ResetNickname_1";

function App() {
  return (
    <div>
      {/*<Menu/>*/}
      {/*<Palette/>*/}
      {/*<Landing_1/>*/}

      {/*<ResetNickname_1/>*/}

      <Router>
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
      </Router>
    </div>
  );
}

export default App;
