import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

const TableComponent = ({noticeList, page}) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="right"> 제목 </TableCell>
                            <TableCell align="right"> 내용 </TableCell>
                            <TableCell align="right"> 작성자 </TableCell>
                            <TableCell align="right"> 작성일 </TableCell>
                            <TableCell align="right"> 추천(좋아요) </TableCell>
                        </TableRow>
                    </TableHead>
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
                                <TableCell align="right">{notice.like_count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default TableComponent;
