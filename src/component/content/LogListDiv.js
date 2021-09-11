import {useHistory} from "react-router-dom";
import white_hr from "../../svg/white_hr.svg";
import PaletteCircle from "../circle/PaletteCircle";
import styled from "styled-components";
import React from "react";

const LogListDiv = (props) => {
    const history = useHistory();
    let height = 0;
    if(props.num <= 3){
        height = 414
    }
    else{
        height = props.num * 130 + 24;
    }

    // 데이터 패칭할 때 이거 지우고 return()에서 map함수 쓰면 될듯
    const rendering = () => {
        let hr_height = 60;
        console.log(hr_height)
        const result = [];
        for (let i = 0; i< props.num; i++){
            result.push(
                <div style={{position: "relative"}}>
                    <HR src={white_hr}
                        h={hr_height}
                    />
                    <PostBox>
                        <Post onClick={()=>{history.push('/otherLog')}}>

                            <CircleDiv>
                                <PaletteCircle
                                    width={60} height={60}
                                    deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                                    feeling={[20,10,20,50]}
                                />
                            </CircleDiv>

                            <div style={{marginLeft:16}}>
                                <div className="jejugothic">
                                    <PostTitle>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>
                                </div>

                                <PostBody>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>
                            </div>
                        </Post>
                    </PostBox>
                </div>
            )
            height += 60
        }
        return result;
    }
    return(
        <Wrap
            num={props.num}
            height={height}
        >
            <Text>{props.floor}</Text>
            {rendering()}

            {/*데이터 패칭할 때 이거 사용 + map함수*/}
            {/*<PostBox>*/}
            {/*    <Hr borderColor = {props.color}/>*/}
            {/*    <Circle circleColor = {props.color}></Circle>*/}
            {/*    <Post>*/}

            {/*        <PaletteCircle/>*/}
            {/*        <PostTitle color={props.color}>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>*/}
            {/*        <PostBody color={props.bodyTextColor}>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>*/}
            {/*    </Post>*/}
            {/*</PostBox>*/}
            {/**/}

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
