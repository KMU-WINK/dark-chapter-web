import styled from "styled-components";
import logo from "../svg/logo.svg";
import menu from "../svg/menu.svg";
import plus from "../svg/plus.svg";
import initPalette from "../svg/initPalette.svg"
import wave1 from "../svg/wave.svg";
import wave2 from "../svg/wave2.svg";
import download from "../svg/download.svg"
import {useState} from "react";
import PaletteCircle from "../component/circle/PaletteCircle";
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const [title, setTitle] = useState('흑역사를 입력해주세요')
    const [init, setInit] = useState(true);

    return <>
        <Header>
            <MenuIcon onClick={()=>{history.push('/menu')}}/>
            <PlusIcon onClick={()=>{history.push('/post')}}/>
        </Header>

        <Wrap>
            <LogoDiv/>
        </Wrap>

        <Wrap>
            <Title>[ {title} ]</Title>
        </Wrap>

        <Wrap3>
            {init?
                <InitDiv/>
                :
                <PaletteCircle
                    width={128} height={128}
                    deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                    color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                    feeling={[20,10,20,50]}
                />
            }
        </Wrap3>

        {/*<WaveDiv>*/}
        {/*    <Wave1/>*/}
        {/*    <Wave2/>*/}
        {/*</WaveDiv>*/}

        <Wrap2>
            <Page onClick={()=>{history.push('/myLog')}}>
                <Icon/>
                <Name>My_log</Name>
            </Page>
            <Page onClick={()=>{history.push('/other')}}>
                <Icon/>
                <Name>Other_log</Name>
            </Page>
        </Wrap2>
    </>
}

export default Home;

const Header = styled.div`
  display : flex;
  justify-content: space-between;
`
const MenuIcon = styled.img.attrs({
    src : menu
})`
    margin-left : 24px;
    margin-top : 9px;
`
const PlusIcon = styled.img.attrs({
    src : plus
})`
  margin-right : 24px;
  margin-top : 8.5px; 
`

const Wrap = styled.div`
  display : flex;
  justify-content: center;
`

const LogoDiv = styled.img.attrs({
        src : logo
    })`
    margin-top : 78px;
`

const Title = styled.div`
  margin-top : 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: rgba(126, 126, 126, 0.6);
`
const Wrap3 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 118px;
`

const InitDiv = styled.img.attrs({
    src : initPalette
})`
`

const WaveDiv = styled.div`
    margin-top : 118px;
`

const Wave1 = styled.img.attrs({
    src : wave1
})`
    //margin-top : 87.1px;
  position: absolute;
  width: 2777px;
  height: 97px;
  left: -832.19px;
  top: 531.11px;
`
const Wave2 = styled.img.attrs({
    src : wave2
})`
  //margin-top : 71px;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: space-around;
  margin : 204px 30px 0 30px;
`

const Page = styled.div`
  display : flex;
  justify-content: center;
`

const Icon = styled.img.attrs({
    src : download
})`
`

const Name = styled.div`
  font-family: JejuGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 11.6883px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #747474;
  margin-left : 2px;
`
