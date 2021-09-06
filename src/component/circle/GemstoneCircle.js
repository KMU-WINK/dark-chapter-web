import SympathyCircle from "./SympathyCircle";
import styled from 'styled-components';
import PaletteCircle from "./PaletteCircle";
import shadowCircle from "../../svg/shadowCircle.svg";
import surfaceCircle from "../../svg/surfaceCircle.svg";

const GemstoneCircle = () => {

    return <Wrap>
        <SympathyCircle backgroundColor={"#2c2c38"}
                        feeling={[50,47,45,43]}
                        color={["#fe4e62","#466598","#fdada6","#fff9d9"]}
                        black={false}
        />
        {/*<ShadowCircle/>*/}
        <Wrap2>
            <PaletteCircle
                width={100} height={100}
                deg={["14% 14%", "14% 86%", "86% 14%","86% 86%"]}
                color={["#FF2036FF","#FFF890FF","#366197FF","#faaba4"]}
                feeling={[20,10,20,50]}
            />
        </Wrap2>

        <SurfaceCircle/>
    </Wrap>
}

export default GemstoneCircle;

const Wrap = styled.div`
  //width : 1px;
  //height : 1px;
`

const ShadowCircle = styled.img.attrs({
    src : shadowCircle
})`
    position : absolute;
    left : 50px;
    top : 50px;
    width: 100px;
    height: 100px;
`
const Wrap2 = styled.div`
  position : absolute;
  left : 50px;
  top : 50px;
`

const SurfaceCircle = styled.img.attrs({
    src : surfaceCircle
})`
  position : absolute;
  left : 50px;
  top : 50px;
  width: 100px;
  height: 100px;
`
