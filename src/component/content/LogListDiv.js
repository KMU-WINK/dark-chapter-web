import {useHistory} from "react-router-dom";
import white_hr from "../../svg/white_hr.svg";
import PaletteCircle from "../circle/PaletteCircle";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import * as board_service from "../../axios/board-service";

const LogListDiv = (props) => {
    const history = useHistory();
    const [data,setData] = useState([]);

    const SetCircle = (props) => {
        let feeling = [];
        let color = [];

        if (props.data.angry>0) {
            feeling.push(props.data.angry);
            color.push("#FE4E62");
        }
        if (props.data.shameful>0) {
            feeling.push(props.data.shameful);
            color.push("#FFF9D9");
        }
        if (props.data.gloomy>0) {
            feeling.push(props.data.gloomy);
            color.push("#466598");
        }
        if (props.data.funny>0) {
            feeling.push(props.data.funny);
            color.push("#FDADA6");
        }
        return <PaletteCircle
            width={60} height={60}
            color={color}
            feeling={feeling}
        />
    }

    useEffect(async() => {
        const result = await board_service.getAllBoards();
        setData(result);
    },[]);
    let height = 0;
    if(props.num <= 3){
        height = 414
    }
    else{
        height = props.num * 130 + 24;
    }


    return(
        <Wrap
            num={props.num}
            height={height}
        >
            <Text>{props.floor}</Text>

            {data.map((data)=> <>
            <div style={{position: "relative"}}>
                <HR src={white_hr}/>
                <PostBox>
                    <Post onClick={()=>{history.push({pathname:`/otherLog`, state:data})}}>
                        <CircleDiv>
                            <SetCircle data={data}/>
                        </CircleDiv>
                        <div style={{marginLeft:16}}>
                            <div className="jejugothic">
                                <PostTitle>{data.title}</PostTitle>
                            </div>
                            <PostBody>{data.content} ...더보기</PostBody>
                        </div>
                    </Post>
                </PostBox>
            </div>
                </>
            )}


        </Wrap>
    )
}

export default LogListDiv;

const Wrap = styled.div`
    width : 100%;
    background : #2C2C38;
    padding-top:20px;
    height: ${props => props.height}px;
`

const Text = styled.div`
    margin-left : 24px;
    font-size: 16px;
    letter-spacing: -0.03em;
    font-weight : bold;
    height: 24px;
    color: white;
`

const PostBox = styled.div`
    width : 360px;
    height : 130px;
    position: relative;
    margin: 0 64px;
`

const Post = styled.div`
    width : 100%;
    height : 60px;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

const CircleDiv = styled.div`
  margin-left : 25px;
  margin-right : 30px;
`

const PostTitle = styled.span`
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.03em;
    font-weight : bold;
    color: white;
`

const PostBody = styled.div`
    width: 186px;
    font-style: normal;
    font-weight: 400;
    font-family: PretendartVariable;
    font-size: 10px;
    line-height: 13px;
    color: #DCDCDC;
`

const HR = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

`
