import styled from "styled-components";
import logo from "../svg/logo.svg";
import menu from "../svg/menu.svg";
import plus from "../svg/plus.svg";
import wave from "../svg/wave.svg";
import download from "../svg/download.svg"
import {useState, useEffect} from "react";
import PaletteCircle from "../component/circle/PaletteCircle";
import {useHistory} from "react-router-dom";
import * as board_service from "../axios/board-service";
import empty_circle from "../svg/home_empty_circle.svg"

const Home = () => {

    console.log(window.innerHeight)

    const history = useHistory();
    const [title, setTitle] = useState('흑역사를 입력해주세요')
    const [data, setData] = useState([])

    useEffect(() => {
        const getBoard = async () => {
            const result = await board_service.getBoard(sessionStorage.getItem("email"));
            setData(result)
        }
        getBoard()
        console.log(data.length)

    }, [])

    useEffect(()=>{
        if(data.length !== 0){
            setTitle(data[data.length-1].title)
        }
    },[data])

    return <All>
        <Header>
            <MenuIcon onClick={() => {
                history.push('/menu')
            }}/>
            <PlusIcon onClick={() => {
                history.push('/post')
            }}/>
        </Header>

        <Wrap>
            <LogoDiv/>
        </Wrap>

        <Wrap>
            <Title>[ {title} ]</Title>
        </Wrap>

        <Wrap3>
            {data.length === 0 ?
                <InitDiv/>
                :

                <PaletteCircle
                    width={128} height={128}
                    color={["#FE4E62", "#FFF9D9", "#466598", "#FDADA6"]}
                    feeling={[data[data.length-1].angry, data[data.length-1].shameful, data[data.length-1].gloomy, data[data.length-1].funny]}
                    // color={color}
                    // feeling={feeling}
                />

            }
        </Wrap3>


        {data.length === 0?
            <Wave top={551} height={208}/>
            :
            <Wave top={291.11}  height={window.innerHeight-285}/>
        }


        <Wrap4 margin={data.length === 0}>
            <Page onClick={() => {
                history.push('/myLogPage')
            }}>
                <Icon/>
                <Name className="jejugothic">My_log</Name>
            </Page>
            <Page onClick={() => {
                history.push('/other')
            }}>
                <Icon/>
                <Name className="jejugothic">Other_log</Name>
            </Page>
        </Wrap4>
    </All>
}

export default Home;

const All = styled.div`
  width : 100vw;
  height : 100vg;
  background: #F3F3ED;
  overflow : no-content;
`

const Header = styled.div`
  display : flex;
  justify-content: space-between;
`

const MenuIcon = styled.img.attrs({
    src: menu
})`
    margin-left : 24px;
    margin-top : 9px;
`

const PlusIcon = styled.img.attrs({
    src: plus
})`
  margin-right : 24px;
  margin-top : 8.5px; 
`

const Wrap = styled.div`
  display : flex;
  justify-content: center;
`

const LogoDiv = styled.img.attrs({
    src: logo
})`
    margin-top : 78px;
`

const Title = styled.div`
  margin-top : 16px;
  font-family: PretendartVariable;
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
    src: empty_circle
})`
`

const WaveDiv = styled.div`
    margin-top : 100px;
`

const Wave = styled.img.attrs({
    src: wave
})`
  position: absolute;
  width : 100%;

  height : ${props=>props.height}px;
  bottom:0
  // top: ${props => props.top}px;
`

const Wrap4 = styled.div`
  display : flex;
  justify-content: space-around;
  margin : ${props => props.margin  ? "204px 0 0 0" : "320px 30px 0 30px"};
  z-index : 5;
`

const Page = styled.div`
  display : flex;
  justify-content: center;
  z-index : 5;
`

const Icon = styled.img.attrs({
    src: download
})`
`

const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 11.6883px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #747474;
  margin-left : 2px;
`
const White = styled.div`
  background : white;
  width : ${props => props.w}px;
  position : absolute;
  height : ${props => props.h}px;
  z-index : -10;
  mix-blend-mode : normal;
`
