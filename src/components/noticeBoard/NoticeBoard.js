import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button, FormControl, MenuItem, Select, TextField,} from '@mui/material';
import {FiSearch} from 'react-icons/fi';
import {authClient} from '../../utils/requestMethod';
import PageNation from '../common/PageNation';
import {TokenAtom} from '../../jotai/jotai';
import {useAtomValue} from 'jotai';
import AddBoardModal from './addBoardModal/AddBoardModal';
import {ContentWrap} from '../common/commonStyledComponent';
import {take} from '../../utils/config';
import TableCard from './TableCard';
import NoticeBoardDetail from './NoticeBoardDetail';
// import {TokenAtom} from '../../jotai/jotai';

const NoticeBoard = () => {
    const [searchSelectedItem, setSearchSelectedItem] = useState('title');
    const [searchText, setSearchText] = useState(''); // 검색창 항목
    const [noticeList, setNoticeList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(1)
    const token = useAtomValue(TokenAtom);
    const [isOpenBoardModal, setIsOpenBoardModal] = useState(false);
    const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
    // console.log('token?', TokenAtom.getItem('loginBoard'))

    useEffect(() => {
        getBoardList();
    }, []);

    const getBoardList = async () => {
        console.log('token?', token)
        try {
            const {data} = await authClient.get(`/board/list?page=${page}&take=${take}&searchItem=${searchSelectedItem}&searchText=${searchText}`);
            console.log('data', data);
            setNoticeList(data.boardList);
            setTotalPageCount(data.pageCount)
        } catch (e) {
            console.log('게시판?', e);
        }
    };
    const handlePageChange = (e, page) => {
        setPage(page);
    }
    const handleSearchItemChange = (e) => {
        setSearchSelectedItem(e.target.value);
    }
    const openAddBoardModal = (submit) => {
        if (submit) {
            getBoardList();
        }
        setIsOpenBoardModal(!isOpenBoardModal);
    }
    const openBoardDetailModal = () => {
        setIsOpenDetailModal(!isOpenDetailModal);
    }
    return (
        <>
            {isOpenDetailModal && <NoticeBoardDetail openBoardDetailModal={openBoardDetailModal}/>}
            {isOpenBoardModal && <AddBoardModal openAddBoardModal={openAddBoardModal}/>}
            {/* {isOpenDetailModal && <NoticeBoardDetail/>}*/}
            <MainNoticeWrap>
                <MainTitleWrap>
                    <h1>title </h1>
                    <InputFormWrap>
                        <div className='search_btn'>
                            <MuiFormControl variant="standard">
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={searchSelectedItem}
                                    label="options"
                                    className="selectBox"
                                    onChange={handleSearchItemChange}
                                >
                                    <MenuItem value={'title'} selected>
                                        Title
                                    </MenuItem>
                                    <MenuItem value={'name'}>Name</MenuItem>
                                </Select>
                            </MuiFormControl>

                            <div>
                                <TextField
                                    id="standard-search"
                                    placeholder="Search"
                                    type="search"
                                    variant="standard"
                                    className="inputs_textfield"
                                    onKeyPress={getBoardList}
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                                <button>
                                    <FiSearch onClick={getBoardList}/>
                                </button>
                            </div>
                        </div>
                        <Button variant="contained" onClick={openAddBoardModal}>게시물 추가</Button>
                    </InputFormWrap>
                </MainTitleWrap>
                <ContentWrapCustom>
                    {/* <TableComponent noticeList={noticeList} getBoardList={getBoardList}></TableComponent>*/}
                    <TableCard noticeList={noticeList} getBoardList={getBoardList}
                               openBoardDetailModal={openBoardDetailModal}></TableCard>
                    {/* <PageNation page={page} handlePageChange={handlePageChange}/>*/}
                </ContentWrapCustom>
                <PageNation page={page} handlePageChange={handlePageChange}/>
            </MainNoticeWrap>
        </>
    );
};
const MainNoticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  color: #e4e4e4;
  text-align: center;

  background-color: #111;
`;
const MainTitleWrap = styled.div`
  width: 700px;

  padding: 20px;
  font-size: 25px;

  h1 {
    margin-bottom: 20px;
    //font-size: 25px;
  }
`;
const MuiFormControl = styled(FormControl)`
  .selectBox {
    width: 120px;
    //height: 32px;
    border: 1px solid #c4c0c0;
    border-radius: 4px;
    color: #e4e4e4;
    //background-color: #e4e4e4;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 0;
      border-radius: inherit;
    }

    svg {
      margin-left: 20px;
      color: #e4e4e4;
      font-size: 25px;
    }

    &::before {
      height: inherit;
      margin: 0 8px 1px;
    }

    &::after {
      margin: 0 8px 1px;
    }
  }
`;

const InputFormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
  //border: 1px solid #c4c0c0;
  //border-radius: 4px;
  .search_btn {
    display: flex;

    button {
      cursor: pointer;
      color: #fff;
      font-size: 20px;
      border: none;
      background: none;
      //border: 1px solid;
      padding-top: 15px;
    }
  }

  button {
    height: 40px;
  }

  .inputs_textfield {
    width: 420px;
    height: 40px;
    border-bottom: 1.5px solid #9e9e9e;
    //margin: 15px;
    input {
      height: 32px;
      padding-left: 14px;
      color: #e4e4e4;
      //border: 1px solid red;
    }
  }
`;
const ContentWrapCustom = styled(ContentWrap)`
  flex-direction: row;
`

export default NoticeBoard;
