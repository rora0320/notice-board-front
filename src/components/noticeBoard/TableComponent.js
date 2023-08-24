import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import {FaRegKissWinkHeart} from 'react-icons/fa';
import styled from 'styled-components';

const TableComponent = ({noticeList, page}) => {

    return (
        <>
            <TableWrap component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHeadResize>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="right"> 제목 </TableCell>
                            <TableCell align="right"> 내용 </TableCell>
                            <TableCell align="right"> 작성자 </TableCell>
                            <TableCell align="right"> 작성일 </TableCell>
                            <TableCell align="right"> 추천(좋아요) </TableCell>
                        </TableRow>
                    </TableHeadResize>
                    <TableBody>
                        {noticeList?.map((notice, index) => (
                            <TableRow
                                key={notice.pk}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="right">{notice.title}</TableCell>
                                <TableCell align="right">{notice.content}</TableCell>
                                <TableCell align="right">{notice.carbs}</TableCell>
                                <TableCell align="right">{moment(notice.create_time).format('YYYY-MM-DD')}</TableCell>
                                <TableCell align="right">
                                    <p>{notice.like_count}</p>
                                    <FaRegKissWinkHeart
                                        className='likeIcon'/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableWrap>
        </>
    );
};

const TableWrap = styled(TableContainer)`
  background-color: #111 !important;
  //border: 1px solid red;
  border-radius: 0 !important;

  th, td {
    color: #fff;
    text-align: center;
  }

  tbody {

    tr:nth-child(odd) {
      background-color: rgba(38, 95, 229, 0.15);
    }
  }

  p {
    display: inline-block;
    //margin-top: -5px;
    //border: 1px solid red;
  }

  .likeIcon {
    font-size: 18px;
    margin-left: 10px;
    //margin-top: 5px;
    //border: 1px solid red;
  }
`
const TableHeadResize = styled(TableHead)`
  height: 40px;

  th {
    height: 40px;
    padding: 0 16px;

  }
`
export default TableComponent;
