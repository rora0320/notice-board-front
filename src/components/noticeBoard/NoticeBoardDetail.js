import React from 'react';
import {ContentWrap, ModalBackGround, ModalWrap, TitleWrap} from '../common/commonStyledComponent';
import {TfiClose} from 'react-icons/tfi';
import styled from 'styled-components';

const NoticeBoardDetail = ({openBoardDetailModal}) => {
    return (
        <ModalBackGround>
            <ModalWrapResize>
                <TitleWrap>
                    <h3>Board Detail</h3>
                    <TfiClose className="titleClose" onClick={openBoardDetailModal}/>
                </TitleWrap>

                <ContentWrap>
                    <div>dkddkdk</div>
                </ContentWrap>
            </ModalWrapResize>
        </ModalBackGround>
    );
};

const ModalWrapResize = styled(ModalWrap)`
  height: 600px;
  width: 600px;
  border: 1px solid red;
  text-align: center;
`

export default NoticeBoardDetail;