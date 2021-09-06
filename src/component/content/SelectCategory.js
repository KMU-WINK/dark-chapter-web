import styled from "styled-components";
import downArrow from "../../svg/downArrow.svg";
import {useState} from "react";

const SelectCategory = () => {
    const [category, setCategory] = useState();
    return <>
        <CategoryDiv>
            <HashTag>#</HashTag>
            <Category>썸남 썰</Category>
            <DownIcon/>
        </CategoryDiv>
    </>
}

export default SelectCategory;

const CategoryDiv = styled.div`
  margin-top : 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  //width: 100px;
  height: 24px;
  opacity: 0.8;
  /* Black Typo/White */

  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 12px;
`
const HashTag = styled.div`
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  margin : 4px;
`

const Category = styled.div`
  font-family: PretendartVariable;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
`

const DownIcon = styled.img.attrs({
    src : downArrow
})`
  margin : 4px 2px 4px 6px;
  width : 16px;
  height : 16px;
`
