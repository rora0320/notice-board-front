import React, {useState} from 'react';
import styled from 'styled-components';
import {TfiClose} from 'react-icons/tfi';
import {Button, TextField} from '@mui/material';
import _ from 'lodash';
import {unAuthClient} from '../../../utils/requestMethod';
import {ModalBackGround, ModalWrap, TitleWrap} from '../commonStyledComponent';

const JoinUsModal = ({openModalJoinUs}) => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const [idEmail, setIdEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleInputForm = (event) => {
        switch (event.target.name) {
            case 'ID':
                // if (!emailRegex.test(event.target.value)) return;
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
        if (_.isEmpty(idEmail) || _.isEmpty(password) || _.isEmpty(fullName)) {
            return false;
        } else {
            return true;
        }
    };
    const submitInputForm = async () => {
        const body = {
            id: idEmail,
            password: password,
            name: fullName,
        };
        if (checkedForm()) {
            try {
                const {data} = unAuthClient.post(
                    '192.168.20.16:3000/user/signup',
                    body
                );
                console.log('data', data);
            } catch (e) {
                console.log('사용자 추가 에러', e);
            }
        }
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
                        <CustomBtn variant="contained" onClick={submitInputForm}>
                            저장
                        </CustomBtn>
                    </CustomBtnWrap>
                </ContentWrap>
            </ModalWrap>
        </ModalBackGround>
    );
};

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
