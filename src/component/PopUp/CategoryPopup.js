import React,{useState, useEffect} from "react";
import './Category.css'
import resetIcon from '../../svg/reset.svg'
import privateIcon from '../../svg/private.svg'
import shareIcon from '../../svg/carbon_share.svg'

function CategoryPopup(props){
    const [choose, setChoose] = useState([]);
    const [category, setCategory] = useState('place');
    const categoryList = {
    'place' : {
        'home':['주거공간','집','숙박업소','격리시설'],
        'study' : ['공부','학교','학원','도서관','독서실'],
        'work' : ['일자리','회사','알바'],
        'publicPlace' : ['공공장소','공공장소','영화관','전시장','공중화장실','쇼핑몰','엘레베이터'],
        'restaurant' : ['음식점','식당','카페','술집'],
        'etc' : ['기타','야외','대중교통']
    },
    'person' : {
        'love' : ['사랑','짝남짝녀','썸남썸녀','연인','첫사랑'],
        'family' : ['가족','가족','부모님','형제/자매','부부','친척','반려동물'],
        'friend' : ['친구','친구','룸메이트'],
        'work' : ['업무','직장동료','상사','거래처'],
        'school' : ['학교','선후배','스승','학생','동기','팀원'],
        'etc' : ['기타','지인','모르는사람']
    },
    'situation' : {
        'situation' : ['상황','실수','생리현상','몸개그','술','사회생활','버릇','사랑','어릴적','오해','해외','여가생활']
    },
    'emotion' : {
        'funny' : ['(ㅋㅅㅋ)','개웃김','흥','과다의욕','술안주','주옥됨','어이없음'],
        'regret' : ['(ㅍㅅㅍ)','수치플','쎈척','멍청','반성','자퇴각','퇴사각'],
        'sad' : ['(ㅠㅅㅠ)','우울','트라우마','후회']
    }}
    const setUnvisible = () =>{
        props.setCategory(!props.category)
    }
    const functionCategoryElement = (crrnt) => {
        let elementList = categoryList[crrnt]
        let elementValue = [];
        for(const [key, value] of Object.entries(elementList)){
            elementValue.push(value)
        }
        return <div style={{marginTop : '16px'}}>
            {elementValue.map(e=>(<div>
                <p className='subtitle'>{e[0]}</p>
                <div className='categoryElementSection'>
                {e.slice(1).map(elem=>(
                    <button className='categoryElement' onClick={addChoose} value={elem} name={elem}>{elem}</button>
                ))}</div>
            </div>))}
        </div>
    }
    const categoryChange = ({target}) => {
        setCategory(target.value)
        const prnt = target.parentNode.childNodes
        for(let i=0;i<prnt.length;i++){
            prnt[i].style.color = prnt[i].value===target.value?'#2C2C38':'#dcdcdc'
        }
        if (choose.length){
            for(let i=0;i<choose.length;i++){
                const tag = document.querySelector('.categoryElement[name='+choose[i]+']')
                if (tag) {
                    tag.className = 'selectedCategoryButton'
                }
            }
        }
    }
    const addChoose = ({target}) =>{
        if (choose.length<4) {
            setChoose([...choose,target.value])
            const addElem = document.querySelector('.categoryElement[name='+target.value+']')
            if (addElem) {
                addElem.className='selectedCategoryButton'
            }
        }
    }
    const delChoose = ({target}) =>{
        while (target.tagName!=='BUTTON'){
            target = target.parentNode
        }
        let idx = choose.indexOf(target.value)
        let changeList = choose.slice(0,idx).concat(choose.slice(idx+1))
        setChoose(changeList)
        const delElem = document.querySelector('.selectedCategoryButton[name='+target.value+']')
        console.log(delElem)
        if (delElem){
            delElem.className = 'categoryElement'
        }
    }
    const initBtn = () =>{
        setChoose([])
        const elemtList = document.querySelectorAll('.categoryElementSection')
        for(let i=0;i<elemtList.length;i++){
            let buttonList = elemtList[i].childNodes
            for(let j=0;j<buttonList.length;j++){
                buttonList[j].className = 'categoryElement'
            }
        }
    }
    return(
        <div className='categoryPopup'>
            <div onClick={setUnvisible} className='popupCloseDiv'></div>
            <div className='categoryContents'>
                <div className='categorySelect'>
                    <button value='place' onClick={categoryChange} style={{color : '#2c2c38'}}>장소</button>
                    <button value='person' onClick={categoryChange}>사람</button>
                    <button value='situation' onClick={categoryChange}>상황</button>
                    <button value='emotion' onClick={categoryChange}>감정</button>
                </div>
                <p className='selectedCategoryLength'>{choose.length}/4</p>
                {choose.length?<div className='selectedSection'>
                    {choose.map(e=>(
                    <button className='selectedCategoryButton' onClick={delChoose} value={e}>{e} <p style={{color : '#747474',fontSize : '14px',marginLeft : '3px'}}>X</p></button>))
                    }
                </div>:null
                }
                {functionCategoryElement(category)}
                <div className='categoryBottomBtn'>
                    <button className='resetBtn' onClick={initBtn}><img src={resetIcon} alt=""/> 전체 초기화</button>
                    <div className='bottomBtnRight'>
                        <button className='privateBtn'><img src={privateIcon} alt=""/>나만 보기</button>
                        <button className='shareBtn'><img src={shareIcon} alt=""/>공유하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryPopup