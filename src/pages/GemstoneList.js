import styled from "styled-components";
import GemstoneCircle from "../component/circle/GemstoneCircle";
import GoBackBtn from "../component/button/GoBackBtn";
import "../fonts/fonts.css"
import {useHistory} from "react-router-dom";
import PaletteCircle from "../component/circle/PaletteCircle";
import {useEffect, useState} from "react";
import * as stone_service from "../axios/stone-service";

const GemstoneList = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(async()=>{
        console.log(window.sessionStorage.getItem("email"));
        const result = await stone_service.getMyAllStone(window.sessionStorage.getItem("email"));
        console.log("result ",result);
    },[])

    let paletteFeeling = [];
    let paletteColor = [];
    let sympathyFeeling = [];
    let sympathyColor = [];

    const SetPaletteCircle = () => {
        if (data.angry>0) {
            paletteFeeling.push(data.angry);
            paletteColor.push("#FE4E62");
        }
        if (data.shameful>0) {
            paletteFeeling.push(data.shameful);
            paletteColor.push("#FFF9D9");
        }
        if (data.gloomy>0) {
            paletteFeeling.push(data.gloomy);
            paletteColor.push("#466598");
        }
        if (data.funny>0) {
            paletteFeeling.push(data.funny);
            paletteColor.push("#FDADA6");
        }
        console.log(paletteFeeling);
        console.log(paletteColor);
    }

    const SetSympathyCircle = () => {
        if (data.sympathyAngry>0) {
            sympathyFeeling.push(data.sympathyAngry);
            paletteColor.push("#FE4E62");
        }
        if (data.sympathyShameful>0) {
            sympathyFeeling.push(data.sympathyShameful);
            paletteColor.push("#FFF9D9");
        }
        if (data.sympathyGloomy>0) {
            sympathyFeeling.push(data.sympathyGloomy);
            paletteColor.push("#466598");
        }
        if (data.sympathyFunny>0) {
            sympathyFeeling.push(data.sympathyFunny);
            paletteColor.push("#FDADA6");
        }
    }

    return <All className="jejugothic">
        <Header>
            <GoBackBtn black={true} previousPage={'/myLogPage'}/>
            <Text>원석함</Text>
        </Header>

        {
            <Log>
                <Wrap onClick={() => {
                    history.push({pathname:"/gemstoneLog"})
                }}>
                    <Wrap1>
                        <GemstoneCircle
                            size={85}
                            sympathyFeeling={[50, 30, 27, 20]}
                            sympathyColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                            black={false}

                            width={85} height={85}
                            paletteColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                            paletteFeeling={[4, 1, 2, 3]}
                        />
                    </Wrap1>

                    <Wrap2 className={"jejugothic"}>
                        <Title>흑역사 제목</Title>
                        <Date>20.02.01</Date>
                    </Wrap2>
                </Wrap>
            </Log>
        }
        <Log>
            <Wrap onClick={() => {
                history.push({pathname:"/gemstoneLog"})
            }}>
                <Wrap1>
                    <GemstoneCircle
                        size={85}
                        sympathyFeeling={[50, 30, 27, 20]}
                        sympathyColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                        black={false}

                        width={85} height={85}
                        paletteColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                        paletteFeeling={[4, 1, 2, 3]}
                    />
                </Wrap1>

                <Wrap2 className={"jejugothic"}>
                    <Title>흑역사 제목</Title>
                    <Date>20.02.01</Date>
                </Wrap2>
            </Wrap>
        </Log>
        <Log>
            <Wrap onClick={() => {
                history.push({pathname:"/gemstoneLog"})
            }}>
                <Wrap1>
                    <GemstoneCircle
                        size={85}
                        sympathyFeeling={[50, 30, 27, 20]}
                        sympathyColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                        black={false}

                        width={85} height={85}
                        paletteColor={["#fe4e62", "#466598", "#fdada6", "#fff9d9"]}
                        paletteFeeling={[4, 1, 2, 3]}
                    />
                </Wrap1>

                <Wrap2 className={"jejugothic"}>
                    <Title>흑역사 제목</Title>
                    <Date>20.02.01</Date>
                </Wrap2>
            </Wrap>
        </Log>
    </All>
}

export default GemstoneList;

const All = styled.div`
  width : 100vw;
  height : 100vh;
  background: #F3F3ED;
`

const Header = styled.div`
  height: 56px;
  display : flex;
  justify-content: start;
`

const Text = styled.span`
  position: absolute;
  height: 20px;
  left: 53.24px;
  top: 11.85px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.03em;
`

const Log = styled.div`
  display : flex;
  justify-content: center;
  margin : 55px 0 17px 0;
`

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  //display: flex;
  //align-items: center;
  letter-spacing: -0.03em;
  color: #2C2C38;
  text-align : center;
`

const Date = styled.div`
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  color: #979797;
  margin-top : 4px;
  text-align : center;
`

const Wrap = styled.div`
`
const Wrap1 = styled.div`
  width : 85px;
  height : 85px;
`
const Wrap2 = styled.div`
    margin-top : 24px;
  text-align : center;
`
