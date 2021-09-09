import styled, { keyframes }  from 'styled-components';
import SympathyCircle from "../component/circle/SympathyCircle";
import { Route, Link } from 'react-router-dom';

const Sympathy = () => {

    return <Link style={{color: 'white', textDecoration: 'none'}} to={'/other'}>
        <Wrap className={"jejugothic"}>
        <Space/>
        <Circle/>
        <SympathyCircle backgroundColor={"#2c2c38"}
                        feeling={[50,47,45,43]}
                        color={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        black={true}
        />
        <Text>
            <SympathyText>웃기다니 저도 한층 가볍네요!</SympathyText>
            <FromText>-심해에서 용치놀래기가-</FromText>
        </Text>
    </Wrap>
    </Link>
}

export default Sympathy;

const Space = styled.div`
  height : 10px;
`

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2c2c38;
`

const Circle = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 176px;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform : translateY(20px);
  }
  
  to{
    opacity: 3;
    transform: none;
  }
`

const Text = styled.div`
    margin-top : 330px;
    animation: ${fadeIn} 1s ease-in-out;
`

const SympathyText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.6);

`

const FromText = styled.div`
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  margin-top : 10px;
`



