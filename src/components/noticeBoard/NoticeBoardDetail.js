import React, {useEffect, useState} from 'react';
import {ContentWrap, MainNoticeWrap, MainTitleWrap} from '../common/commonStyledComponent';
import {Button, TextField} from '@mui/material';
import styled from 'styled-components';
import {authClient} from '../../utils/requestMethod';
import {useParams} from 'react-router-dom';
import {RiUserHeartFill} from 'react-icons/ri';
import {useAtomValue} from 'jotai';
import {UserAtom} from '../../jotai/jotai';

const NoticeBoardDetail = () => {
    const params = useParams();
    const userInfo = useAtomValue(UserAtom);

    const [detailData, setDetailData] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetchNoticeBoardDetail();
    }, []);

    const fetchNoticeBoardDetail = async () => {
        const {data} = await authClient.get(`/board/detail/${params.boardPk}`);
        console.log('data', data);
        setDetailData(data[0]);
    }
    const submitComment = async () => {
        try {
            await authClient.post(`/board/comment/${params.boardPk}`, {comment, user: userInfo.pk})
            await fetchNoticeBoardDetail();
        } catch (e) {
            console.log('댓글 error', e)
        }
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
                                <div className='commentBoder'><RiUserHeartFill/>{detail.user.name}</div>
                                <div>{detail.comment}</div>
                            </div>
                        )
                    })}
                    <BoardText>
                        <p>댓글</p>
                        <TextField name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <Button className='commentBtn' variant='outlined' onClick={submitComment}>댓글 작성</Button>
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
    align-items: center;
    margin-bottom: 10px;

    .commentBoder {
      padding-right: 10px;
      border-right: 1px solid #e4e4e4;
    }
  }

  .commentBtn {
    border: 1px solid #e4e4e4;
    color: #e4e4e4;
  }
`
export default NoticeBoardDetail;