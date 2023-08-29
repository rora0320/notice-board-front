import React, {useEffect, useState} from 'react';
import {ContentWrap, MainNoticeWrap, MainTitleWrap} from '../common/commonStyledComponent';
import {Button, TextField} from '@mui/material';
import styled from 'styled-components';
import {authClient} from '../../utils/requestMethod';
import {useParams} from 'react-router-dom';
import {useAtomValue} from 'jotai';
import {UserAtom} from '../../jotai/jotai';
import {RiUserHeartFill} from 'react-icons/ri';

const NoticeBoardDetail = () => {
    const params = useParams();
    const userInfo = useAtomValue(UserAtom);

    const [preComment, setPreComment] = useState([]);
    const [noticeDetailInfo, setNoticeDetailInfo] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [newComment, setNewComment] = useState([]);

    useEffect(() => {
        fetchNoticeBoardDetail();
    }, []);

    const fetchNoticeBoardDetail = async () => {
        const {data} = await authClient.get(`/board/detail/${params.boardPk}`);
        setNoticeDetailInfo(data[0]);
        setTitle(data[0].title);
        setContent(data[0].content);
        setPreComment(data[0].comments);
    }
    const submitComment = async () => {
        try {
            await authClient.post(`/board/comment/${params.boardPk}`, {comment: preComment, user: userInfo.pk})
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
                    <TextField name='title' value={title}
                               disabled={userInfo.pk !== noticeDetailInfo?.user?.pk}
                               onChange={(e) => setTitle(e.target.value)}/>
                </BoardText>
                <BoardContentText>
                    <p>내용</p>
                    <TextField className='multiContent' name='content' multiline value={content}
                               disabled={userInfo.pk !== noticeDetailInfo?.user?.pk}
                               onChange={(e) => setContent(e.target.value)}/>
                </BoardContentText>
                <BoardComment>
                    {noticeDetailInfo?.comments?.map((detail, index) => {
                        console.log('detail data', detail)
                        return (
                            <div className='commentsPrev' key={`comment${index}`}>
                                <div className='commentBoder'><RiUserHeartFill/>{detail.user.name}</div>
                                <div>{detail.comment}</div>
                            </div>
                        )
                    })}
                    <BoardText>
                        <p>댓글</p>
                        <TextField name='comment' value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
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

    &: disabled {
      -webkit-text-fill-color: rgba(220, 211, 211, 0.38);
    }
  }

`
const BoardContentText = styled(BoardText)`

  .multiContent {
    border: 1px solid #eee;
    border-radius: 4px;
    height: 400px;

    textarea {
      width: 470px;
      color: #eee;
      text-overflow: ellipsis;
      display: -webkit-box;
      webkit-line-clamp: 3; //원하는 라인수
      webkit-box-orient: vertical;

      &: disabled {
        -webkit-text-fill-color: rgba(220, 211, 211, 0.38);
      }
    }
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