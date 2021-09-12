import React,{useEffect} from 'react';
import styled from "styled-components";
import "../../fonts/fonts.css";
import white_hr from "../../svg/white_hr.svg"
import black_hr from "../../svg/black_hr.svg"
import PaletteCircle from "../circle/PaletteCircle";
import {useHistory} from "react-router-dom";

function MyLogFloor(props){
    // const date = props.data[0].createdAt;

    // console.log(props.data[0].createdAt.split('T')[0])
    let depth = 0;
    const color = props.color;
    const textColor = props.bodyTextColor

    const history = useHistory();
    let height = 0;
    if(props.num <= 3){
        height = 414
    }
    else{
        height = props.num * 130 + 24;
    }

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

    const setDepth = (value) => {
        console.log(value);
        if (value < 100) depth = 0;
        else if (value < 500) depth = 1;
        else depth = 2;
        return depth;
    }

    return(
        <Wrap
            backgroundTop={props.backgroundTop}
            backgroundBottom={props.backgroundBottom}
            num={props.num}
            height={height}
        >
            <Text color={color}>{props.floor}</Text>

            {/*데이터 패칭할 때 이거 사용 + map함수*/}
            {props.data.map(data =>
                <div style={{position: "relative"}}>
                    <HR src={props.color === "white" ? white_hr: black_hr}/>
                    <PostBox>
                        <Post onClick={()=>{
                            history.push({
                                pathname: '/myLog',
                                state: {
                                    state : data,
                                    depth : setDepth(data.depth),
                                },

                            })
                        }}>

                            <CircleDiv>
                                <SetCircle data={data}/>
                            </CircleDiv>

                            <div style={{marginLeft:16}}>
                                <div className="jejugothic">
                                    <PostTitle color={color}>{data.title}</PostTitle>
                                </div>

                                <PostBody color={textColor}>{data.content}</PostBody>
                            </div>
                        </Post>
                    </PostBox>
                </div>
            )}

        </Wrap>
    )
}

const Wrap = styled.div`
    width : 100%;
    background : linear-gradient(${props => props.backgroundTop}  , ${props => props.backgroundBottom});
    padding-top:26px;
    height: ${props => props.height}px;
    z-index: -1;
`

const Text = styled.div`
    margin-left : 24px;
    font-size: 16px;
    letter-spacing: -0.03em;
    font-weight : bold;
    height: 24px;
    color: ${props => props.color};
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
    color: ${props => props.color}
`

const PostBody = styled.div`
    width: 186px;
    font-style: normal;
    font-weight: 400;
    font-family: PretendartVariable;
    font-size: 10px;
    line-height: 13px;
    color: ${props => props.color};
`

const HR = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

`

export default MyLogFloor
