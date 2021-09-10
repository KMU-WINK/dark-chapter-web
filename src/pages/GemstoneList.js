import styled from "styled-components";
import GemstoneCircle from "../component/circle/GemstoneCircle";
import GoBackBtn from "../component/button/GoBackBtn";
import "../fonts/fonts.css"
import {useHistory} from "react-router-dom";

const GemstoneList = () => {
    const history = useHistory();

    return <All className="jejugothic">
        <Header>
            <GoBackBtn black={true} previousPage={'/myLogPage'}/>
            <Text>원석함</Text>
        </Header>

        {/* 나중에 연결할 때 map 사용 */}
        <Log>
            <Wrap onClick={()=>{history.push("/gemstoneLog")}}>
                <Wrap1>
                    <GemstoneCircle
                        size={85}
                        sympathyFeeling={[50,30,27,20]}
                        sympathyColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        black={false}

                        width={85} height={85}
                        deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                        paletteColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        paletteFeeling={[4,1,2,3]}
                    />
                </Wrap1>

                <Wrap2 className={"jejugothic"}>
                    <Title>흑역사 제목</Title>
                    <Date>20.02.01</Date>
                </Wrap2>
            </Wrap>
        </Log>

        <Log>
            <Wrap onClick={()=>{history.push("/gemstoneLog")}}>
                <Wrap1>
                    <GemstoneCircle
                        size={85}
                        backgroundColor={"#2c2c38"}
                        sympathyFeeling={[50,47,45,43]}
                        sympathyColor={["#466598","#fe4e62","#fdada6","#fff9d9"]}
                        black={false}

                        width={85} height={85}
                        deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                        paletteColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        paletteFeeling={[2,1,2,5]}
                    />
                </Wrap1>

                <Wrap2>
                    <Title>흑역사 제목</Title>
                    <Date>20.02.01</Date>
                </Wrap2>
            </Wrap>
        </Log>

        <Log>
            <Wrap onClick={()=>{history.push("/gemstoneLog")}}>
                <Wrap1>
                    <GemstoneCircle
                        size={85}
                        backgroundColor={"#2c2c38"}
                        sympathyFeeling={[50,47,45,43]}
                        sympathyColor={["#fff9d9","#466598","#fe4e62","#fdada6"]}
                        black={false}

                        width={85} height={85}
                        deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                        paletteColor={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        paletteFeeling={[2,2,4,2]}
                    />
                </Wrap1>

                <Wrap2>
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
