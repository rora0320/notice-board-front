import React from 'react';
import {ContentWrap, ModalBackGround, ModalWrap, TitleWrap} from '../../common/commonStyledComponent';
import styled from 'styled-components';
import {TfiClose} from 'react-icons/tfi';
import {Button, TextField} from '@mui/material';

const AddBoardModal = ({openAddBoardModal}) => {
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
                        <TextField/>
                    </BoardText>
                    <BoardContentText>
                        <p>내용</p>
                        <TextField/>
                    </BoardContentText>
                </ContentWrapResize>
                <Button variant="contained">추가</Button>
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
  height: 85%;
  //border: 2px solid blue;
`
const BoardText = styled.div`
  display: flex;
  border: 1px solid blueviolet;
`
const BoardContentText = styled(BoardText)`
  height: 500px;
`
export default AddBoardModal;