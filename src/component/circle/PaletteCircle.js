import styled from 'styled-components';

const PaletteCircle = (props) => {
   return <Wrap>
       <Circle
           w={props.width} h={props.height}
           deg={props.deg} color={props.color} feeling={props.feeling}
       />
   </Wrap>
}

export default PaletteCircle;

const Wrap = styled.div`
  
  display : flex;
  justify-content: center;
`

const Circle = styled.div`
  width : ${props=>props.w}px;
  height : ${props=>props.h}px;
  border-radius: 50%;
   background: radial-gradient(circle at ${props=>props.deg[0]}, ${props=>props.color[0]} ${props => props.feeling[0]}%, transparent 70.71%),
               radial-gradient(circle at ${props=>props.deg[1]}, ${props=>props.color[1]} ${props => props.feeling[1]}%, transparent 70.71%),
              radial-gradient(circle at ${props=>props.deg[2]}, ${props=>props.color[2]} ${props => props.feeling[2]}%, transparent 70.71%),
              radial-gradient(circle at ${props=>props.deg[3]}, ${props=>props.color[3]} ${props => props.feeling[3]}%, transparent 70.71%);
  filter: blur(3px);
  backdrop-filter: blur(20px);
`


