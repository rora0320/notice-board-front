import React from 'react';
import {createTheme, Pagination, ThemeProvider} from '@mui/material';
import styled from 'styled-components';

const PageNation = ({page, handlePageChange}) => {
    return (
        <ThemeProvider theme={theme}>
            <PaginationCustom
                count={page}
                color="primary"
                checked={1}
                showFirstButton
                showLastButton
                onChange={handlePageChange}
            />
        </ThemeProvider>
    );
};

const PaginationCustom = styled(Pagination)`
  display: flex;
  justify-content: center;

  ul > li > button {
    margin-top: 10px;
    color: #e4e4e4;
  }
`
export default PageNation;

export const theme = createTheme({
    palette: {
        primary: {
            main: '#265fe5',
        },
        /* secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
        }, */
    },
});