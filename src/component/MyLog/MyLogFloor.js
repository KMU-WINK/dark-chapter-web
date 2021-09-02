import React,{useEffect} from 'react';
import styled from "styled-components";

import circle from "../../svg/MyLog-circle.png"

function MyLogFloor(props){

    // 데이터 패칭할 때 이거 지우고 return()에서 map함수 쓰면 될듯
    const rendering = () => {
        const result = [];
        for (let i = 0; i< props.num; i++){
            result.push(
                <PostBox>
                    <Hr borderColor = {props.color}/>
                    <Circle circleColor = {props.color}></Circle>
                    <Post>

                        <PaletteCircle/>
                        <PostTitle color={props.color}>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>
                        <PostBody color={props.bodyTextColor}>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>
                    </Post>
                </PostBox>
            )
        }
        return result;
    }
    return(
        <Div
            backgroundTop={props.backgroundTop}
            backgroundBottom={props.backgroundBottom}
            num={props.num}
        >
            <Text color={props.color}>{props.floor}</Text>

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

        </Div>
    )
}

const Div = styled.div`
    width : 360px;
    background : linear-gradient(${props => props.backgroundTop}  , ${props => props.backgroundBottom});

    height: ${props => props.num<=3 ? "440px" : "auto"}
`

const Text = styled.div`
    margin-left : 24px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.03em;
    font-weight : bold;
    color: ${props => props.color}
`

const PostBox = styled.div`
    width : 360px;
    position : relative;
    height : 130px;
`

const Post = styled.div`
    width : 262px;
    height : 60px;

    margin-left : 65px;
    position : absolute;
    top: 50%;
    transform : translateY(-50%);
`

const Hr = styled.div`
    width:32px;
    border: 1px solid ${props => props.borderColor};

    position: absolute;
    top: 50%;
    bottom: 50%;
    left : 0;
`
const Circle = styled.div`
    position : absolute;
    left : 32px;
    top : 51%;
    transform : translateY(-50%);
    border: 2px solid ${props => props.circleColor};
    border-radius: 50%;
    width: 9px;
    height: 9px;
`


const PaletteCircle = styled.img.attrs({
    src : circle
})`
`

const PostTitle = styled.span`
    position : absolute;
    left: 29.01%;
    right: 0%;
    top: 7.5%;
    bottom: 57.5%;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.03em;
    font-weight : bold;
    color: ${props => props.color}
`

const PostBody = styled.span`
    position: absolute;
    left: 29.01%;
    right: 0%;
    top: 49.17%;
    bottom: 7.5%;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;

    color: ${props => props.color};
`

export default MyLogFloor
