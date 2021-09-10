import SympathyCircle from "./SympathyCircle";
import styled from 'styled-components';
import PaletteCircle from "./PaletteCircle";
import shadowCircle from "../../svg/shadowCircle.svg";
import surfaceCircle from "../../svg/surfaceCircle.svg";

const GemstoneCircle = (props) => {
    return <Wrap size={props.size}>
        <Wrap1>
            <SympathyCircle size={props.size}
                            backgroundColor={props.backgroundColor}
                            feeling={props.sympathyFeeling}
                            color={props.sympathyColor}
                            black={props.black}
            />
        </Wrap1>
        <ShadowCircle size={props.size}/>
        <Wrap2>
            <PaletteCircle
                width={props.width} height={props.height}
                deg={props.deg}
                color={props.paletteColor}
                feeling={props.paletteFeeling}
            />
        </Wrap2>
        <SurfaceCircle size={props.size}/>
    </Wrap>
}

export default GemstoneCircle;

const Wrap = styled.div`
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  position : relative;
  display : flex;
  justify-content: center;
`

const Wrap1 = styled.div`
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  display : flex;
  justify-content: center;
`

const ShadowCircle = styled.img.attrs({
    src : shadowCircle
})`
    position : absolute;
    top : -5px;
    left : -5px;
    width: ${props=>props.size+10}px;
    height: ${props=>props.size+10}px;
`
const Wrap2 = styled.div`
  position : absolute;
`

const SurfaceCircle = styled.img.attrs({
    src : surfaceCircle
})`
  position : absolute;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
`
