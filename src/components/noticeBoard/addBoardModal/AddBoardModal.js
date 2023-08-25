import React, {useState} from 'react';
import {ContentWrap, ModalBackGround, ModalWrap, TitleWrap} from '../../common/commonStyledComponent';
import styled from 'styled-components';
import {TfiClose} from 'react-icons/tfi';
import {Button, TextField} from '@mui/material';
import {authClient} from '../../../utils/requestMethod';
import {UserAtom} from '../../../jotai/jotai';
import {useAtomValue} from 'jotai';

const AddBoardModal = ({openAddBoardModal}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const userInfo = useAtomValue(UserAtom);

    const handleInputText = (e) => {
        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'content':
                setContent(e.target.value);
                break;
            default:
                setContent('');
                setTitle('');
                break;
        }
    }
    const submitNoticeBoard = async () => {
        try {
            const {data} = await authClient.post('/board/create', {title, content, user: userInfo.pk});
            console.log('submit data', data);
            openAddBoardModal(true)
        } catch (e) {
            console.log('submit error', e)
        }

    }
    return (
        <ModalBackGround>
            <ModalWrapResize>
                <TitleWrap>
                    <h3 className="titleHead">게시판 추가</h3>
                    <TfiClose className="titleClose" onClick={openAddBoardModal}/>
                </TitleWrap>
                <ContentWrapResize>
                    <BoardText>
                        <p>제목</p>
                        <TextField name='title' value={title} onChange={handleInputText}/>
                    </BoardText>
                    <BoardContentText>
                        <p>내용</p>
                        <TextField name='content' value={content} onChange={handleInputText}/>
                    </BoardContentText>
                </ContentWrapResize>
                <Button variant="contained" onClick={submitNoticeBoard}>추가</Button>
            </ModalWrapResize>
        </ModalBackGround>
    );
};

const ModalWrapResize = styled(ModalWrap)`
  height: 600px;
  width: 600px;
  //border: 1px solid red;
  text-align: center;

`
const ContentWrapResize = styled(ContentWrap)`
  width: 100%;
  height: 85%;

  //border: 2px solid blue;
`
const BoardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 500px;
    height: 40px;
    padding: 0;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #eee;

    &: hover {
      border: 2px solid #0033ff;
    }
  }

  //border: 1px solid blueviolet;
`
const BoardContentText = styled(BoardText)`
  height: 500px;

  input {
    height: 400px;
  }
`
export default AddBoardModal;