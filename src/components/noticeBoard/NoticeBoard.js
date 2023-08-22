import React, { useState } from 'react';
import styled from 'styled-components';
import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

const NoticeBoard = () => {
  const [searchSelectedItem, setSearchSelectedItem] = useState('PatientId');
  return (
    <>
      <MainNoticeWrap>
        <MainTitleWrap>
          <h1>title </h1>
          <InputFormWrap>
            <MuiFormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={searchSelectedItem}
                label="options"
                className="selectBox"
              >
                <MenuItem value={'PatientId'} selected>
                  Patient ID
                </MenuItem>
                <MenuItem value={'name'}>Patient Name</MenuItem>
              </Select>
            </MuiFormControl>

            <div>
              <TextField
                id="standard-search"
                placeholder="Search"
                type="search"
                variant="standard"
                className="inputs_textfield"
              />
              <FiSearch />
            </div>
          </InputFormWrap>
        </MainTitleWrap>
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
  padding: 20px;
  font-size: 25px;

  h1 {
    margin-bottom: 20px;
    //font-size: 25px;
  }
`;
const MuiFormControl = styled(FormControl)`
  .selectBox {
    width: 165px;
    height: 40px;
    border-right: 1px solid #c4c0c0;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #c4c0c0;
  border-radius: 4px;

  .inputs_textfield {
    width: 300px;
    border-bottom: 1.5px solid #9e9e9e;
    //margin: 15px;
    input {
      padding-left: 14px;
      color: #e4e4e4;
    }
  }
`;
export default NoticeBoard;
