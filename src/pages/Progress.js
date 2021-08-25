import styled from 'styled-components';
import GoBackBtn from "../component/button/GoBackBtn";
import list from "../svg/list.svg";
import LogContent from "../components/LogContent";

const Progress = () => {
    return <>
        <Wrap>
            <Header>
                <GoBackBtn/>
                <ListIcon/>
            </Header>

            <Wrap2>
                <Circle/>
            </Wrap2>

            <Wrap3>
                <LogContent/>
            </Wrap3>
        </Wrap>
    </>
}

export default Progress

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background: #2c2d39;
`

const Header = styled.div`
  display : flex;
  justify-content : space-between;
`

const ListIcon = styled.img.attrs({
    src : list
})`
    margin-right: 24px;
    margin-top : 16px;
`

const Wrap2 = styled.div`
  display : flex;
  justify-content: center;
  margin-top : 97px;
`

const Circle = styled.div`
  width : 240px;
  height : 240px;
  border-radius : 50%;
  //background : #282c34;
  background : white;
  display : flex;
  justify-content: center;
`

const Wrap3 = styled.div`
  margin : 102px 24px 70px 24px;
`
