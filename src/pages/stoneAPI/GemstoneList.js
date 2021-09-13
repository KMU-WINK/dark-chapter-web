import styled from "styled-components";
import GemstoneCircle from "../../component/circle/GemstoneCircle";
import GoBackBtn from "../../component/button/GoBackBtn";
import "../fonts/fonts.css"
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import * as stone_service from "../../axios/stone-service";

const GemstoneList = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    const [paletteFeel, setPaletteFeel] = useState([0,0,0,0]);
    const [paletteColor, setPaletteColor] = useState(["#fe4e62","#466598","#fff9d9","#fdada6"]);

    const [sympathyFeel, setSympathyFeel] = useState([0,0,0,0]);
    const [sympathyColor, setSympathyColor] = useState(["#fe4e62","#466598","#fff9d9","#fdada6"]);

    useEffect(async()=> {
        console.log(window.sessionStorage.getItem("email"));
        const result = await stone_service.getMyAllStone(window.sessionStorage.getItem("email"));
        console.log("result ",result.data);
        setData(result.data);
    }, []);

    const SetGemstone = (data) => {
        let pFeeling = [];
        let pColor = [];
        let sFeeling = [];
        let sColor = [];

        if (data.angry > 0) {
            pFeeling.push(data.angry);
            pColor.push("#fe4e62");
        }
        if (data.gloomy > 0) {
            pFeeling.push(data.gloomy);
            pColor.push("#466598");
        }
        if (data.funny > 0) {
            pFeeling.push(data.funny);
            pColor.push("#fff9d9");
        }
        if (data.shameful > 0) {
            pFeeling.push(data.shameful);
            pColor.push("#fdada6");
        }

        if (data.sympathyAngry > 0) {
            sFeeling.push(data.sympathyAngry);
            sColor.push("#fe4e62");
        }
        if (data.sympathyGloomy > 0) {
            sFeeling.push(data.sympathyGloomy);
            sColor.push("#466598");
        }
        if (data.sympathyFunny > 0) {
            sFeeling.push(data.sympathyFunny);
            sColor.push("#fff9d9");
        }
        if (data.sympathyShameful > 0) {
            sFeeling.push(data.sympathyShameful);
            sColor.push("#fdada6");
        }
        const symFeel = sFeeling
        let symFeeling = [];
        let symColor = [];
        for (let i = 0; i < sFeeling.length; i++) {
            let maxSym = 0;
            let maxIdx = -1;
            for (let j = 0; j < sFeeling.length; j++) {
                if (maxSym < sFeeling[j]) {
                    maxSym = sFeeling[j];
                    maxIdx = j;
                }
            }
            sFeeling[maxIdx] = -1;
            symFeeling.push(symFeel[maxIdx])
            symColor.push(sColor[maxIdx])
        }
        setPaletteFeel(pFeeling);
        setPaletteColor(pColor);
        setSympathyColor(symColor);
        setSympathyFeel(symFeeling);

        return <GemstoneCircle
                    size={85}
                    sympathyFeeling={sympathyFeel}
                    sympathyColor={sympathyColor}
                    black={false}

                    width={85} height={85}
                    paletteColor={paletteColor}
                    paletteFeeling={paletteFeel}
                />
    }
    return <All className="jejugothic">
        <Header>
            <GoBackBtn black={true} previousPage={'/myLogPage'}/>
            <Text>원석함</Text>
        </Header>

        {data.map((data)=>
            <Log>
                <Wrap onClick={() => {
                    history.push({
                        pathname:"/gemstoneLog",
                        state:{
                            state:data,
                            pf:paletteFeel,
                            pc:paletteColor,
                            sf:sympathyFeel,
                            sc:sympathyColor
                        }
                    })
                }}>
                    <Wrap1>
                        <SetGemstone data={data}/>
                    </Wrap1>

                    <Wrap2 className={"jejugothic"}>
                        <Title>{data.title}</Title>
                        <Date>{data.createdAt.split('T')[0]}</Date>
                    </Wrap2>
                </Wrap>
            </Log>
        )}
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
