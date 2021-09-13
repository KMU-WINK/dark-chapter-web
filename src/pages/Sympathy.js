import styled, { keyframes }  from 'styled-components';
import SympathyCircle from "../component/circle/SympathyCircle";
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import baseService from "../axios/base-service";

const Sympathy = (props) => {
    const [sympathyFeel, setSympathyFeel] = useState([0,0,0,0]);
    const [sympathyColor, setSympathyColor] = useState(["#fe4e62","#466598","#fff9d9","#fdada6"]);
    const [sympathyMessage, setSympathyMessage] = useState("");

    useEffect(async() => {
        const GetSympathy = async() => {
            await baseService.get(`/sympathy/${props.location.board_id}`).then(
                result => {
                    console.log(result.data)
                    let symFeel = [0, 0, 0, 0];
                    for (let i = 0; i < result.data.length; i++) {
                        if (result.data[i].angry === 1) {
                            symFeel[0]++;
                            setSympathyMessage("분노는 나의 힘..");
                        } else if (result.data[i].gloomy === 1) {
                            symFeel[1]++;
                            setSympathyMessage("덕분에 한결 가벼워졌어요");
                        } else if (result.data[i].funny === 1) {
                            symFeel[2]++;
                            setSympathyMessage("당신을 웃길 수 있어 행복해요");
                        } else if (result.data[i].shameful === 1) {
                            symFeel[3]++;
                            setSympathyMessage("부끄러움은 당신의 몫..");
                        }
                    }
                    let feeling = [];
                    let color = []
                    if (symFeel[0] > 0) {
                        feeling.push(symFeel[0]);
                        color.push("#fe4e62");
                    }
                    if (symFeel[1] > 0) {
                        feeling.push(symFeel[1]);
                        color.push("#466598");
                    }
                    if (symFeel[2] > 0) {
                        feeling.push(symFeel[2]);
                        color.push("#fff9d9");
                    }
                    if (symFeel[3] > 0) {
                        feeling.push(symFeel[3]);
                        color.push("#fdada6");
                    }
                    console.log(feeling);

                    let symFeeling = [];
                    let symColor = [];
                    for (let i = 0; i < feeling.length; i++) {
                        let maxSym = 0;
                        let maxIdx = -1;
                        for (let j = 0; j < feeling.length; j++) {
                            if (maxSym < feeling[j]) {
                                maxSym = feeling[j];
                                maxIdx = j;
                            }
                        }
                        feeling[maxIdx] = -1;
                        symFeeling.push(symFeel[maxIdx])
                        symColor.push(color[maxIdx])
                    }
                    console.log(symFeeling)
                    console.log(symColor)
                    setSympathyColor(symColor);
                    setSympathyFeel(symFeeling);
                }
            )
            return true;
        }
        await GetSympathy();
    },[])

    return <Link style={{color: 'white', textDecoration: 'none'}} to={'/other'}>
        <Wrap className={"jejugothic"}>
            <Space/>
            <Circle/>
            <Center>
                <SympathyCircle backgroundColor={"#2c2c38"}
                                feeling={sympathyFeel}
                                color={sympathyColor}
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

