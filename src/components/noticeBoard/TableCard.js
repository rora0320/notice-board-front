import React from 'react';
import styled from 'styled-components';
import {FaRegKissWinkHeart} from 'react-icons/fa';
import {authClient} from '../../utils/requestMethod';
import {useAtomValue} from 'jotai';
import {UserAtom} from '../../jotai/jotai';
import {useNavigate} from 'react-router-dom';

const TableCard = ({noticeList, getBoardList}) => {
    const userInfo = useAtomValue(UserAtom);
    const navigate = useNavigate();
    const handleLikeCount = async (noticeInfo) => {
        try {
            await authClient.post(`/board/like/${noticeInfo.pk}`, {userPk: userInfo.pk});
            getBoardList();
        } catch (e) {
            console.log('조항요 error', e)
        }
    }
    const openBoardDetailPage = (noticePk) => {
        console.log('data와?', noticePk);
        navigate(`/detailBoard/${noticePk}`);
    }
    return (
        <>
            {noticeList.map((notice) => {
                return (
                    <CardModel key={notice.pk}>
                        <div className='titlePosition'>
                            <h1>{notice.title}</h1>
                            <div onClick={() => handleLikeCount(notice)}>
                                <p>{notice.like_count}</p>
                                <FaRegKissWinkHeart
                                    className='likeIcon'/>
                            </div>
                        </div>
                        <div className='contentPosition' onClick={() => openBoardDetailPage(notice.pk)}>
                            {notice.content}
                        </div>
                        <div className='contentPositionRight'>{notice.user.name}</div>
                    </CardModel>
                )
            })}
        </>
    );
};

const CardModel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #969494;
  border-radius: 5px;
  background-color: #232323;
  width: 233px;
  height: 150px;
  color: #c4c0c0;
  margin-right: 10px;


  .titlePosition {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    h1 {
      font-size: 20px;
      font-weight: 450;
      margin: 10px 0;
    }

    p {
      display: inline-block;

    }

    .likeIcon {

      font-size: 18px;
      margin-left: 10px;
    }
  }

  .contentPosition {
    width: 230px;
    height: 85px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    //white-space: nowrap;
  }

  .contentPositionRight {
    width: 90%;
    text-align: right;
  }

`
export default TableCard;