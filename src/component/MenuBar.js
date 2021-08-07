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

function MenuBar () {
    const [visible,setVisible] = useState(false);

    const showMenuList = () =>{
        return setVisible(!visible)
    }
    return(
        visible ?
            <div className='menuComponent'>
                <button className='menuBarButtonDiv' onClick={showMenuList}>
                    <img src={arrowBack} alt="menuCloseBtn" className='menuBtn'/>
                </button>
                <h2>Menu</h2>
                <div className='myAccount'>
                    <p className='menuTitle'>My Account</p>
                    <div>
                        <button>
                            <img src={userIcon} alt=""/>
                            <p>비밀번호 변경</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={userIcon} alt=""/>
                            <p>닉네임 변경</p>
                        </button>
                    </div>
                </div>
                <div>
                    <p className='menuTitle'>App setting</p>
                    <div>
                        <img src={bell} alt=""/>
                        <p>알람설정 ON</p>
                    </div>
                    <div>
                        <img src={lockIcon} alt=""/>
                        <p>앱 잠금 OFF</p>
                    </div>
                    <p className='appLockNotice'>비밀번호 분실시 찾기 어려워요ㅠ</p>
                </div>
                <div>
                    <p className='menuTitle'>Information</p>
                    <div>
                        <img src={versionIcon} alt=""/>
                        <p>version</p>
                        <p>1.0v</p>
                    </div>
                    <div>
                        <button>
                            <img src={shield} alt=""/>
                            <p>개인정보 정책</p>
                        </button>
                    </div>
                </div>
                <button>
                    <img src={logout} alt=""/>
                    <p>Logout</p>
                </button>
            </div>
        :
        <button className='menuBarButtonDiv' onClick={showMenuList}>
            <img alt="menuOpenBtn" src={menuLogo} className='menuBtn'/>
        </button>
    )
}
export default MenuBar;