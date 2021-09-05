import React,{useState, useEffect} from "react";
import './Category.css'
import resetIcon from '../../svg/reset.svg'
import privateIcon from '../../svg/private.svg'
import shareIcon from '../../svg/carbon_share.svg'

function CategoryPopup(){
    const [choose, setChoose] = useState([]);
    const [category, setCategory] = useState('place');
    // const categoryList = ['place','person','situation','emotion']
    const categoryList = {
    'place' : {
        'home':['주거공간','집','숙박업소','격리시설'],
        'study' : ['공부','학교','학원','도서관','독서실'],
        'work' : ['일자리','회사','알바'],
        'publicPlace' : ['공공장소','공공장소','영화관','전시장','공중 화장실','쇼핑몰','엘레베이터'],
        'restaurant' : ['음식점','식당','카페','술집'],
        'etc' : ['기타','야외','대중교통']
    },
    'person' : {
        'love' : ['사랑','짝남/짝녀','썸남/썸녀','연인','첫사랑'],
        'family' : ['가족','가족','부모님','형제/자매','부부','친척','반려동물'],
        'friend' : ['친구','친구','룸메이트'],
        'work' : ['업무','직장동료','상사','거래처'],
        'school' : ['학교','선후배','스승','학생','동기','팀원'],
        'etc' : ['지인','모르는 사람']
    },
    'situation' : {
        'situation' : ['상황','실수','생리현상','몸개그','술','사회생활','버릇','사랑','어릴적','오해','해외','여가생활']
    },
    'emotion' : {
        'funny' : ['(ㅋㅅㅋ)','개웃김','흥','과다의욕','술안주','주옥됨','어이없음'],
        'regret' : ['(ㅍㅅㅍ)','수치플','쎈척','멍청','반성','자퇴각','퇴사각'],
        'sad' : ['(ㅠㅅㅠ)','우울(증)','트라우마','후회']
    }}
    const functionCategoryElement = (crrnt) => {
        let elementList = categoryList[crrnt]

    }
    return(
        <div className='categoryPopup'>
            <div className='categoryContents'>
                <div className='categorySelect'>
                    <button value='place' onClick={({target})=>{setCategory(target.value)}}>장소</button>
                    <button value='person' onClick={({target})=>{setCategory(target.value)}}>사람</button>
                    <button value='situation' onClick={({target})=>{setCategory(target.value)}}>상황</button>
                    <button value='emotion' onClick={({target})=>{setCategory(target.value)}}>감정</button>
                </div>
                {choose.length?<div>
                    {choose.map(e=>(
                    <button>e</button>))
                    }
                </div>:null
                }
                {functionCategoryElement(category)}
                <div className='categoryBottomBtn'>
                    <button><img src={resetIcon} alt=""/> 전체 초기화</button>
                    <button><img src={privateIcon} alt=""/>나만 보기</button>
                    <button><img src={shareIcon} alt=""/>공유하기</button>
                </div>
            </div>
        </div>
    )
}
export default CategoryPopup