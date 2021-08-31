import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import MyLogFloor from "../component/MyLog/MyLogFloor";
import MyLogHeader from "../component/MyLog/MyLogHeader";
import MyLogBottomFloor from "../component/MyLog/MyLogBottomFloor";
import Scale from "../component/MyLog/Scale";

function MyLog(){
    const useScroll = () => {
        const [state, setState] = useState({
            x : 0,
            y : 0
        });
        const onScroll = () => {
            setState({ x: window.scrollX, y: window.scrollY });
        };
        useEffect(() => {
            window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
            return () => window.removeEventListener("scroll", onScroll); // clean up
        }, []);
        return state;
    }

    const {y} = useScroll();

    useEffect(() => {
        console.log(y)
    },[y])
    return(
        <Div>


            <MyLogHeader/>
            <MyLogFloor color={"black"} background={"#D2DADF"} floor={"상충"}/>
            <MyLogFloor color={"white"} background={"#97A2B2"} floor={"중충"}/>
            <MyLogFloor color={"white"} background={"#2C2C38"} floor={"심충"}/>
            <MyLogBottomFloor color={"white"} background={"#2C2C38"} floor={"바닥층"}/>
        </Div>
    )
}

const Div = styled.div`
    background:#D2DADF;
    width : 360px;
`

export default MyLog
