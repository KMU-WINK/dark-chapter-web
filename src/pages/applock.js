import React,{ useState, useEffect } from "react";
import '../styles/appLock.css'

function AppLock (){
    const [password, setPassword] = useState('')
    const [passwordComponent, setPasswordComponent] = useState([
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>]);
    const [notice, setNotice] = useState('앱을 잠그기 위한 비밀번호를 입력해 주세요.')
    const inputNumber = ({target}) =>{
        setPassword(target.value)

    }
    return(
        <div className='root'>
            <label htmlFor="password"className='appLockTitle'>앱 비밀번호 설정</label>
            <label htmlFor="password" className='lockNotice'>{notice}</label>
            <div className='passwordSection'>
                {password[0]?<div className='passwordFill'>{password[0]}</div>:<div className='passwordCircle'>{null}</div>}
                {password[1]?<div className='passwordFill'>{password[1]}</div>:<div className='passwordCircle'>{null}</div>}
                {password[2]?<div className='passwordFill'>{password[2]}</div>:<div className='passwordCircle'>{null}</div>}
                {password[3]?<div className='passwordFill'>{password[3]}</div>:<div className='passwordCircle'>{null}</div>}
                <input type="text" id='password' maxLength='4' onChange={inputNumber} />
            </div>
        </div>
    )
};
export default AppLock;