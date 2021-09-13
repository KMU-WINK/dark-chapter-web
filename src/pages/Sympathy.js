import styled, { keyframes }  from 'styled-components';
import SympathyCircle from "../component/circle/SympathyCircle";
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import baseService from "../axios/base-service";

const Sympathy = (props) => {
    const [colorData, setColorData] = useState([]);
    const [sympathyMessage, setSympathyMessage] = useState("");

    useEffect(() => {
      const getSympathy = async() => {
        await baseService.get(`/sympathy/${props.location.board_id}`)
        .then(
          result => {
            console.log(result.data)
            var colorList = []
            for(var i = 0; i < result.data.length; i++) {
                if(result.data[i].angry === 1) {
                    colorList.push("#fe4e62");
                    setSympathyMessage("분노는 나의 힘..");
                }
                else if(result.data[i].gloomy === 1) {
                    colorList.push("#466598");
                    setSympathyMessage("덕분에 한결 가벼워졌어요");
                }
                else if(result.data[i].funny === 1) {
                    colorList.push("#fff9d9");
                    setSympathyMessage("당신을 웃길 수 있어 행복해요");
                }
                else if(result.data[i].shameful === 1) {
                    colorList.push("#fdada6");
                    setSympathyMessage("부끄러움은 당신의 몫..");
                }
            }
            setColorData(colorList)
          }
        )
      }
      getSympathy();
    },[])

    return <Link style={{color: 'white', textDecoration: 'none'}} to={'/other'}>
        <Wrap className={"jejugothic"}>
        <Space/>
        <Circle/>
//         <SympathyCircle backgroundColor={"#2c2c38"}
//                         feeling={[50,50,50,50]}
//                         color={colorData}
//                         black={true}
//                         size={240}
        />
        <Center>
            <SympathyCircle backgroundColor={"#2c2c38"}
                            feeling={[50,50,50,50]}
                            color={colorData}
                            black={true}
                            size={240}
            />
        </Center>
        <Text>
            <SympathyText>{sympathyMessage}</SympathyText>
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

const Center = styled.div`
  display : flex;
  justify-content: center;
`

