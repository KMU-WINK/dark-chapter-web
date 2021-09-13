import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import white_hr from "../svg/white_scale_group.svg"
import OtherHeader from "../component/header/OtherHeader";
import LogListDiv from "../component/content/LogListDiv";
import SelectCategory from "../component/content/SelectCategory";
import * as board_service from "../axios/board-service";
import * as user_service from "../axios/user-service";
import CategoryPopup from "../component/PopUp/CategoryPopup";

const OtherList = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState(false);
    const [select, setSelect] = useState([]);

    useEffect(async() => {
        const result = await board_service.getAllBoards();
        setData(result);
        console.log(result)
    },[]);
    const hrRendering = () => {
        const result = [];
        for(let i= 0;i < data.length*2; i++){
            result.push(<WhiteScale/>)
        }
        return result
    }

    return(
        <Div>
            <OtherHeader previousPage={'/home'} list={true} />
            <Wrap onClick={()=>{setCategory(true)
                console.log(select)}}>
                {/*select 에 선택된 카테고리들 담아둠*/}
                <SelectCategory/>
            </Wrap>
            <div>
                <div style={{position:"relative"}}>
                    <ScaleWrap>
                        {hrRendering()}
                    </ScaleWrap>
                    <LogListDiv
                        num={data.length}
                    />
                </div>
            </div>
            {category?
                <CategoryPopup category={category} setCategory={setCategory} root='list' setSelect={setSelect}/>
                :null
            }
        </Div>
    )
}

const Div = styled.div`
    width : 100%;
    height: 100vh;
    background : #2C2C38;
`

const WhiteScale = styled.img.attrs({
    src:white_hr
})`
    display:block;
    margin-top:10px;
`
const ScaleWrap = styled.div`
    //height : 100%-161px;
    position: absolute;
    top: 1px;
    overflow:hidden;
`

const Wrap = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 16px;
`

export default OtherList;
