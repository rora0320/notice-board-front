import React from 'react';
import styled from 'styled-components';
import {FaRegKissWinkHeart} from 'react-icons/fa';
import {authClient} from '../../utils/requestMethod';
import {useAtomValue} from 'jotai';
import {UserAtom} from '../../jotai/jotai';

const TableCard = ({noticeList, getBoardList}) => {
    const userInfo = useAtomValue(UserAtom);
    const handleLikeCount = async (noticeInfo) => {
        try {
            await authClient.post(`/board/like/${noticeInfo.pk}`, {userPk: userInfo.pk});
            getBoardList();
        } catch (e) {
            console.log('조항요 error', e)
        }
    }
    return (
        <>
            {noticeList.map((notice) => {
                return (
                    <CardModel key={notice.pk}>
                        <div>
                            <h1>{notice.title}</h1>
                            <div>{notice.content}</div>
                        </div>
                        <div className='bottomPosition' onClick={() => handleLikeCount(notice)}>
                            <div><p>{notice.like_count}</p>
                                <FaRegKissWinkHeart
                                    className='likeIcon'/>
                            </div>
                            <p className='bottomUserInfo'>{notice.user.name}</p>
                        </div>
                    </CardModel>
                )
            })}
        </>
    );
};

const CardModel = styled.div`
  position: relative;
  border: 1px solid #969494;
  border-radius: 5px;
  background-color: #c4c0c0;
  width: 233px;
  height: 150px;
  color: #111111;

  h1 {
    font-size: 20px;
    font-weight: 450;
    margin: 10px 0;
  }

  .bottomPosition {
    position: absolute;
    bottom: 0;
    padding: 5px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    //border: 1px solid red;

    p {
      display: inline-block;
      color: #949292;
    }

    .likeIcon {
      font-size: 18px;
      margin-left: 10px;
    }

  }

`
export default TableCard;