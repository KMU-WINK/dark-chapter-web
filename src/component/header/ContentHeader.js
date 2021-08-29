import GoBackBtn from "../button/GoBackBtn";
import styled from "styled-components";
import list from "../../svg/list.svg";
import Modal from 'react-modal';
import {useState} from "react";
const customStyles = {
    content: {
        width : '316px',
        height : '150px',
        top: '600px',
        left : '0px',
        borderRadius : '20px 20px 0px 0px',
        border : 'none',
    },
};

const ContentHeader = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <>
        <Header>
            <GoBackBtn/>
            <ListIcon onClick={openModal} textColor={props.textColor}/>
        </Header>
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            // contentLabel="Example Modal"
        >
            <Center>
                <ModalBar/>
            </Center>
            {props.state === "share"?
                <ContentList>공유하기</ContentList>
                :
                <ContentList>공감 더 끌어모으기</ContentList>
            }
            <ContentList>삭제</ContentList>
        </Modal>
    </>
}

export default ContentHeader;

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

const ModalBar = styled.div`
  width: 40px;
  height: 4px;
  display : flex;
  justify-content: center;

  background: #C4C4C4;
  border-radius: 15px;
`

const Center = styled.div`
  display : flex;
  justify-content: center;
  margin-bottom : 10px;
`

const ContentList = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.05em;
  color: #040404;
  margin-top : 13px;
`
