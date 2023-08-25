import React, {useEffect, useState} from 'react';
import {ContentWrap, MainNoticeWrap, MainTitleWrap} from '../common/commonStyledComponent';
import {TextField} from '@mui/material';
import styled from 'styled-components';
import {authClient} from '../../utils/requestMethod';
import {useParams} from 'react-router-dom';

const NoticeBoardDetail = () => {
    const params = useParams();
    const [detailData, setDetailData] = useState([]);

    useEffect(() => {
        fetchNoticeBoardDetail();
    }, []);
    const fetchNoticeBoardDetail = async () => {
        const {data} = await authClient.get(`/board/detail/${params.boardPk}`);
        console.log('data', data);
        setDetailData(data[0]);
    }
    return (
        <MainNoticeWrap>
            <MainTitleWrap>
                <h1>Board Detail Page</h1>
            </MainTitleWrap>
            <ContentWrap>
                <BoardText>
                    <p>제목</p>
                    <TextField name='title' value={detailData.title}/>
                </BoardText>
                <BoardContentText>
                    <p>내용</p>
                    <TextField name='content' value={detailData.content}/>
                </BoardContentText>
                <BoardText>
                    <p>댓글</p>
                    <TextField name='comment'/>
                </BoardText>
            </ContentWrap>
        </MainNoticeWrap>
    );
};
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
`
const BoardContentText = styled(BoardText)`
  height: 500px;

  input {
    height: 400px;
  }
`
export default NoticeBoardDetail;