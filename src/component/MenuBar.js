import React,{ useState, useEffect } from "react";
import './MenuBar.css'
import menuLogo from '../static/menuBar.png'
import arrowBack from '../static/arrow-back.png'
import userIcon from '../static/user.png'
import lockIcon from '../static/password.png'
import versionIcon from '../static/version.png'
import shield from '../static/Vector.png'
import bell from '../static/bell.png'
import logout from '../static/payout.png'
import {useHistory} from "react-router-dom";

function MenuBar () {
    const history = useHistory();
    const [visible,setVisible] = useState(false);
    const [alert, setAlert] = useState(true);
    const [appLock, setAppLock] = useState(false);
    const showMenuList = () =>{
        return setVisible(!visible)
    }
    const ChangeAlarmSetting = () =>{
        setAlert(!alert)
        if (alert) {
            document.querySelector('.alertToggleBtn').style.left = '16px'
            document.querySelector('.alertToggleBackground').style.background = '#bdbdbd'
        }else {
            document.querySelector('.alertToggleBtn').style.left = '0'
            document.querySelector('.alertToggleBackground').style.background = '#43BC48'
        }
    }
    const changeLockSetting =() =>{
        setAppLock(!appLock)
        if (!appLock) history.push('/appLock')
    }

    const setLogout =() =>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        history.push('/landing')
    }

    // const [aniValue, setAniValue] = useState(new Animated.Value(0));
    // const color = isOn ? onColor : offColor;
    //
    // const moveSwitchToggle = aniValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 20],
    // });
    //
    // Animated.timing(aniValue, {
    //     toValue: isOn ? 1 : 0,
    //     duration: 200,
    //     easing: Easing.linear,
    //     useNativeDriver: true,
    // }).start();
    return(
        <div className='menuComponent'>
            <button className='menuBarButtonDiv' onClick={()=>{history.push('/home')}}>
                <img src={arrowBack} alt="menuCloseBtn" className='menuBtn'/>
            </button>
            <h2>Menu</h2>
            <div className='menuElement'>
                <p className='menuTitle'>My Account</p>
                <div>
                    <button onClick={()=>{history.push('/resetPassword')}}>
                        <img src={userIcon} alt="" className='menuComponentIcon'/>
                        <p>비밀번호 변경</p>
                    </button>
                </div>
                <div className='menuElement'>
                    <button onClick={()=>{history.push('/resetNickname')}}>
                        <img src={userIcon} alt="" className='menuComponentIcon'/>
                        <p>닉네임 변경</p>
                    </button>
                </div>
            </div>
            <div className='menuElement'>
                <p className='menuTitle'>App setting</p>
                <div className='menuToggleElement'>
                    <img src={bell} alt="" className='menuComponentIcon'/>
                    <p>{alert?'알림설정 ON':'알림설정 OFF'}</p>
                    <div className='toggle'>
                        <button onClick={ChangeAlarmSetting}>
                            <div className={'toggleBackground'+' alertToggleBackground'}/>
                            <div className={'toggleBtn' + ' alertToggleBtn'}/>
                        </button>
                    </div>
                </div>
                <div className='menuToggleElement'>
                    <img src={lockIcon} alt="" className='menuComponentIcon'/>
                    <p>{appLock?'앱 잠금 ON':'앱 잠금 OFF'}</p>
                    <div className='toggle'>
                        <button onClick={changeLockSetting}>
                            <div className={appLock?'toggleBackground':'lockToggleBackground'}/>
                            <div className={appLock?'toggleBtn':'lockToggleBtn'}/>
                        </button>
                    </div>
                </div>
                <p className='appLockNotice'>비밀번호 분실시 찾기 어려워요ㅠ</p>
            </div>
            <div className='menuElement'>
                <p className='menuTitle'>Information</p>
                <div className='versionSection'>
                    <img src={versionIcon} alt="" className='menuComponentIcon'/>
                    <p>version</p>
                    <p style={{color : '#bdbdbd',fontSize : '11px',position:'absolute',right:'40px'}}>1.0v</p>
                </div>
                <div>
                    <button>
                        <img src={shield} alt="" style={{width : '13px',height :'16px',marginRight : '27px'}}/>
                        <p>개인정보 정책</p>
                    </button>
                </div>
            </div>
            <button className='logoutBtn' onClick={setLogout}>
                <img src={logout} alt="" className='menuComponentIcon'/>
                <p>Logout</p>
            </button>
        </div>
    )
}
export default MenuBar;
