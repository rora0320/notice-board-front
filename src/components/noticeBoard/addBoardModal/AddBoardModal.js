import React from 'react';
import {ModalBackGround, ModalWrap, TitleWrap} from '../../common/commonStyledComponent';
import styled from 'styled-components';
import {TfiClose} from 'react-icons/tfi';

const AddBoardModal = ({openAddBoardModal}) => {
    return (
        <ModalBackGround>
            <ModalWrapResize>
                <TitleWrap>
                    <h3 className="titleHead">게시판 추가</h3>
                    <TfiClose className="titleClose" onClick={openAddBoardModal}/>
                </TitleWrap>
                <div>qweqweqweqweqwe</div>
            </ModalWrapResize>
        </ModalBackGround>
    );
};

const ModalWrapResize = styled(ModalWrap)`
  height: 600px;
  width: 600px;
`
export default AddBoardModal;