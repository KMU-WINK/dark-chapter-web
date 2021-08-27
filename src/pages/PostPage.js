import React,{ useState, useEffect } from "react";
import '../styles/PostPage.css'
import black_x from "../svg/black_x.svg"
function PostPage () {
    const [title,setTitle] = useState('')
    const [contents, setContents] = useState('')
    const titleInput = ({target}) =>{
        setTitle(target.value)
    }
    const contentsInput = ({target}) =>{
        setContents(target.value)
    }
    return (<>
        <div className='Header'>
            <button className='backBtn'><img src={black_x} alt=""/></button>
            {title.length !== 0 && contents.length !== 0 ?
                <button className='nextBtn' style={{opacity: 1}}>다음</button>
                : <button className='nextBtn' style={{opacity : 0.3}}>다음</button>
            }
        </div>
        <div className='TextContents'>
            <div className='postTitle'>
                <p className='titleIcon'>#</p>
                <input type="text" required placeholder='흑역사에게 이름을 지어주세요' onChange={titleInput}/>
                <p className='titleLength'>{title.length}/20</p>
            </div>
            <div className='postContents'>
                <textarea type="text" maxLength="5000" required placeholder='내용을 입력해주세요' onChange={contentsInput}/>
                <div className='contentsFooter'>
                    <p className='contentsLength'>{contents.length}/5000</p>
                    <div className='pageCircle'><div className='circle current'/><div className='circle'/></div>
                    <button className='inputCompleteBtn'>완료</button>
                </div>
            </div>
        </div>
    </>)
}

export default PostPage;