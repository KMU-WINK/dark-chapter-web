import React,{useEffect} from 'react';
import styled from "styled-components";

import circle from "../../svg/MyLog-circle.png"

function MyLogFloor(props){



    return(
        <Div background={props.background}>
            <Text color={props.color}>{props.floor}</Text>

            {/*여기다 map함수 쓰면 될듯*/}
            <PostBox>
                <Hr borderColor = {props.color}/>
                <Circle circleColor = {props.color}></Circle>
                <Post>

                    <PaletteCircle/>
                    <PostTitle color={props.color}>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>
                    <PostBody>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>
                </Post>
            </PostBox>
            {/**/}

            <PostBox>
                <Hr borderColor = {props.color}/>
                <Circle circleColor = {props.color}></Circle>
                <Post>

                    <PaletteCircle/>
                    <PostTitle color={props.color}>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>
                    <PostBody>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>
                </Post>
            </PostBox>

            <PostBox>
                <Hr borderColor = {props.color}/>
                <Circle circleColor = {props.color}></Circle>
                <Post>

                    <PaletteCircle/>
                    <PostTitle color={props.color}>썸남앞에서 어쩌고 바보멍청이...  </PostTitle>
                    <PostBody>내용내용내용 어쩌고 내용내용 ㅇ내 이용 애용아임 아아이이이잉이이이잉... 더보기</PostBody>
                </Post>
            </PostBox>
        </Div>
    )
}

const Div = styled.div`
    width : 360px;
    background : linear-gradient(#D2DADF 50%, #97A2B2 90%)
`

const Text = styled.span`
    display : block;
    margin-top : 39px;
    margin-left : 24px;
    margin-bottom : -40px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.03em;
    font-weight : bold;
    color: ${props => props.color}
`

const PostBox = styled.div`
    width : 360px;
    position : relative;
`

const Post = styled.div`
    width : 262px;
    height : 60px;
    margin-top: 70px;
    margin-left : 65px;
    position : relative;
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
    top : 52%;
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
    
    color: #747474;
`

export default MyLogFloor
