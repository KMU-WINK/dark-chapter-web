import React,{ useState, useEffect } from "react";
import '../styles/appLock.css'

function AppLock (){
    const [password, setPassword] = useState('')
    const [passwordComponent, setPasswordComponent] = useState([
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>,
        <div className='passwordCircle'> </div>]);
    const inputNumber = ({target}) =>{
        setPassword(target.value)

    }
    return(
        <div className='root'>
            <label htmlFor="password">passWord</label>
            <div className='passwordSection'>
                {passwordComponent}
            </div>
            <input type="text" id='password' maxLength='4' onChange={inputNumber}/>
        </div>
    )
};
export default AppLock;