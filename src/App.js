import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Landing_1,
    Login_1,
    Signup_1,
    Signup_2,
    Signup_4,
    ResetPassword_1,
    ResetPassword_2,
    ResetNickname_1,
    ResetNickname_2,
    Sympathy,
    Progress,
    AppLock,
    PostPage,
} from './pages';
import SeeMoreContent from "./pages/SeeMoreContent";
import OtherLog from './pages/OtherLog';
function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path="/" component={Landing_1}/>
              <Route  path="/login" component={Login_1}/>
              <Route exact path = "/signup" component={Signup_1}/>
              <Route  path = "/signup/password" component={Signup_2}/>
              <Route  path = "/signup/nickname" component={Signup_4}/>

              <Route  exact path = "/resetPassword" component={ResetPassword_1}/>
              <Route  path = "/resetPassword/pwd" component={ResetPassword_2}/>
              <Route path="/post" component={PostPage}/>
              <Route exact path = "/resetNickname/pwd" component={ResetNickname_2}/>

              <Route path = "/sympathy" component={Sympathy}/>
              <Route exact path = "/progress" component={Progress}/>
              <Route path = "/progress/seeMore" component={SeeMoreContent}/>
              <Route path = '/other' component={OtherLog}/>
          </Switch>
          {/*<Route path = '/appLock' component={AppLock}/>*/}
      </Router>
  </>)
}

export default App;
