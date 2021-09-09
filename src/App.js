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
    MyLog,
    AppLock,
    PostPage,
    PostEmotionPage,
    SelectSympathy,
    SeeMoreContent,
    OtherLog,
    Home,
    SeeMoreOther,
    Menu,
    GemstoneLog,
    GemstoneList,
    Record_3,
    WalkThrough_1,
    MyLogPage,

} from './pages';

import PopUp from './component/modal/PopUp.js';
function App() {
    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/" component={Landing_1}/>
                    <Route path="/login" component={Login_1}/>

                    <Route exact path="/signup" component={Signup_1}/>
                    <Route path="/signup/password" component={Signup_2}/>
                    <Route path="/signup/nickname" component={Signup_4}/>

                    <Route path="/Home" component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route exact path="/resetPassword" component={ResetPassword_1}/>
                    <Route path="/resetPassword/pwd" component={ResetPassword_2}/>
                    <Route exact path="/resetNickname/pwd" component={ResetNickname_2}/>
                    <Route exact path="/resetNickname" component={ResetNickname_1}/>
                    <Route path="/resetNickname/pwd" component={ResetNickname_2}/>

                    <Route path="/post" component={PostPage}/>
                    <Route path="/postEmotion" component={PostEmotionPage}/>
                    <Route path="/postDepth" component={Record_3}/>

                    <Route exact path="/myLogPage" component={MyLogPage}/>
                    <Route exact path="/myLog" component={MyLog}/>
                    <Route path="/myLog/seeMore" component={SeeMoreContent}/>

                    <Route exact path='/other' component={OtherLog}/>
                    <Route path='/other/seeMore' component={SeeMoreOther}/>
                    <Route path="/selectSympathy" component={SelectSympathy}/>
                    <Route path="/sympathy" component={Sympathy}/>
                    <Route path="/popup" component={PopUp}/>

                    <Route path="/gemstone" component={GemstoneList}/>
                    <Route path="/gemstoneLog" component={GemstoneLog}/>

                    <Route path="/walk-through" component={WalkThrough_1}/>
                </Switch>
                <Route path='/appLock' component={AppLock}/>
            </Router>
        </>)
}

export default App;
