import React, {useEffect, useState} from 'react';
import {ContentWrap, MainNoticeWrap, MainTitleWrap} from '../common/commonStyledComponent';
import {TextField} from '@mui/material';
import styled from 'styled-components';
import {authClient} from '../../utils/requestMethod';
import {useParams} from 'react-router-dom';
import {RiUserHeartFill} from 'react-icons/ri';

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
                <BoardComment>
                    {detailData?.comments?.map((detail, index) => {
                        return (
                            <div className='commentsPrev' key={`comment${index}`}>
                                <div><RiUserHeartFill/>{detail.user.name}</div>
                                <div>{detail.comment}</div>
                            </div>
                        )
                    })}
                    <BoardText>
                        <p>댓글</p>
                        <TextField name='comment'/>
                    </BoardText>
                </BoardComment>
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
const BoardComment = styled.div`
  //border: 1px solid violet;

  .commentsPrev {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`
export default NoticeBoardDetail;