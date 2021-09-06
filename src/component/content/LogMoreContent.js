import styled from "styled-components";
import LogTitle from "./LogTitle";
import { Route, Link } from 'react-router-dom';

const LogMoreContent = (props) => {
    return <Wrap textColor={props.textColor}>
        <LogTitle tagColor={props.tagColor} textColor={props.textColor}/>
        <TextBox>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <div>하 오늘 지우 앞에서 코가 간지러워서 코를 팠는데 코에서 나루토의 나선환이 나왔다. 미안하다 이거 보여주려고 어그로 끌었다. 나루토 사스...</div>
            <Wrap2>
                {props.status === "MyLog"?
                    <OvercomeBtn tagColor={props.tagColor} textColor={props.textColor}>극복하기</OvercomeBtn>
                    :
                    <>
                        {props.status === "OtherLog"?
                            <Link style={{color:props.textColor, textDecoration: 'none'}} to={'/selectSympathy'}><OvercomeBtn tagColor={props.tagColor} textColor={props.textColor}>공감하기</OvercomeBtn></Link>
                            :
                            null
                        }
                    </>
                }
            </Wrap2>
        </TextBox>
    </Wrap>
}

export default LogMoreContent;

const Wrap = styled.div`
  margin : 52px 24px 70px 24px;
  color : ${props=>props.textColor};
`

const TextBox = styled.div` 
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  margin-top : 24px;
  overflow : auto;
  height : 301px;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 15px;
`

const OvercomeBtn = styled.button`
  width: 80px;
  height: 32px;
  border: 1px solid ${props=>props.textColor};
  color : ${props=>props.textColor};
  box-sizing: border-box;
  border-radius: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  padding : 10px;
`
