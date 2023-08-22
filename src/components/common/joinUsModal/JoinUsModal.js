import React, {useState} from 'react';
import styled from 'styled-components';
import {TfiClose} from 'react-icons/tfi';
import {Button, TextField} from '@mui/material';

const JoinUsModal = ({openModalJoinUs}) => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const [idEmail, setIdEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleInputForm = (event) => {
        switch (event.target.name) {
            case 'ID':
                if (!emailRegex.test(event.target.value)) break;
                setIdEmail(event.target.value);
                break;
            case 'PASSWORD':
                setPassword(event.target.value);
                break;
            case 'NAME':
                setFullName(event.target.value);
                break;
        }
    };
    const checkedForm = () => {

    }
    const submitInputForm = () => {
    };
    return (
        <ModalBackGround>
            <ModalWrap>
                <TitleWrap>
                    <h3 className="titleHead">사용자 추가</h3>
                    <TfiClose className="titleClose" onClick={openModalJoinUs}/>
                </TitleWrap>
                <ContentWrap>
                    <InputFormWrap>
                        <p>ID :</p>
                        <TextField
                            name="ID"
                            className="inputs_textfield"
                            placeholder="Email Address"
                            variant="standard"
                            value={idEmail}
                            onChange={handleInputForm}
                        />
                    </InputFormWrap>
                    <InputFormWrap>
                        <p>Password :</p>
                        <TextField
                            name="PASSWORD"
                            className="inputs_textfield"
                            placeholder="Password"
                            variant="standard"
                            value={password}
                            onChange={handleInputForm}
                        />
                    </InputFormWrap>
                    <InputFormWrap>
                        <p>Name :</p>
                        <TextField
                            name="NAME"
                            className="inputs_textfield"
                            placeholder="Name"
                            variant="standard"
                            value={fullName}
                            onChange={handleInputForm}
                        />
                    </InputFormWrap>
                    <CustomBtnWrap>
                        <CustomBtn variant="contained" onClick={submitInputForm}>저장</CustomBtn>
                    </CustomBtnWrap>
                </ContentWrap>
            </ModalWrap>
        </ModalBackGround>
    );
};

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #313131;
  color: #e4e4e4;

  z-index: 1;
`;
const TitleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 25px;

  .titleHead {
    position: absolute;
    left: 37%;
    text-align: center;
  }

  svg:hover {
    cursor: Pointer;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputFormWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;

  p {
    width: 100px;
  }

  .inputs_textfield {
    width: 400px;
    border-bottom: 1.5px solid #9e9e9e;
    margin: 15px;

    input {
      padding-left: 14px;
      color: #e4e4e4;
    }
  }
`;

const CustomBtnWrap = styled.div`
  margin-top: 30px;
`;

const CustomBtn = styled(Button)`
  width: 100px;
`;
export default JoinUsModal;
