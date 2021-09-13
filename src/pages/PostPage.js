import React,{ useState, useEffect } from "react";
import '../styles/PostPage.css'
import black_x from "../svg/black_x.svg"
import PopUp from '../component/modal/PopUp.js';
import { useHistory } from "react-router";

let cntAngry = 0;
let cntShy = 0;
let cntSad = 0;
let cntLaugh = 0;

function PostPage (props) {
    console.log(props)
    const history = useHistory();
    const [title,setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [isPopup, setIsPopup] = useState(false);
    const [typingFocus, setTypingFocus] = useState(false);
    const titleInput = ({target}) =>{
        setTitle(target.value)
    }
    const contentsInput = ({target}) =>{
        setContents(target.value)
    }
    const postEmotion = () =>{
        history.push({
            pathname:'/postEmotion',
            state: {
                title,
                contents,
                angry: cntAngry,
                sad: cntSad,
                shy: cntShy,
                laugh: cntLaugh
            }
        })
    }
    const checkFocus = () =>{
        setTypingFocus(document.activeElement.tagName==='TEXTAREA'?true:false)
    }
    useEffect(()=>{
        checkFocus()
    },[document.activeElement])

    useEffect(() => {
        if(props.history.location.state){
            setTitle(props.history.location.state.title);
            setContents(props.history.location.state.contents);
            cntAngry = props.history.location.state.angry;
            cntLaugh = props.history.location.state.laugh
            cntSad = props.history.location.state.sad
            cntShy = props.history.location.state.shy
        }
    },[])
    return (<>
        <div className='Header'>
            <button className='backBtn' onClick={()=>{setIsPopup(true)}}><img src={black_x} alt=""/></button>
            {title.length !== 0 && contents.length !== 0 ?
                <button className='nextBtn' style={{opacity: 1}} onClick={postEmotion}>다음</button>
                : <button className='nextBtn' style={{opacity : 0.3}}>다음</button>
            }
        </div>
        <div className='TextContents'>
            <div className='postTitle'>
                <p className='titleIcon'>#</p>
                <input type="text" value={title} required placeholder='흑역사에게 이름을 지어주세요' maxLength='20' onChange={titleInput}/>
                <p className='titleLength'>{title.length}/20</p>
            </div>
            <div className='postContents'>
                <textarea type="text" value={contents} maxLength="5000" rows='20' required placeholder='내용을 입력해주세요' onChange={contentsInput}/>
                <div className='contentsFooter'>
                    <p className='contentsLength'>{contents.length}/5000</p>
                    <button className='inputCompleteBtn' onClick={checkFocus}>{typingFocus?'완료':null}</button>
                </div>
            </div>
        </div>
        {isPopup?
            <PopUp onClose={setIsPopup} state={props.state} title="exit_PostPage" text="정말 나가시겠어요?" text2="기록한 모든게 다 사라져요."/>
            : null
        }
    </>)
}

export default PostPage;
