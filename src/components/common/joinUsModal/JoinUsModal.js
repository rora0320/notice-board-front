import React from 'react';
import styled from "styled-components";
import {TfiClose} from "react-icons/tfi";
import {Button, TextField} from "@mui/material";

const JoinUsModal = () => {
    return (
        <ModalBackGround>
            <ModalWrap>
                <TitleWrap>
                    <h3 className='titleHead'>사용자 추가 모달 </h3>
                    <TfiClose/>
                </TitleWrap>
                <ContentWrap>
                <InputFormWarp>
                    <p>ID :</p>
                    <TextField
                        name="id"
                        className='inputs_textfield'
                        placeholder="Email Address"
                        variant="standard"
                    />
                </InputFormWarp>
                <InputFormWarp>
                    <p>Password :</p>
                    <TextField
                        name="id"
                        className='inputs_textfield'
                        placeholder="Password"
                        variant="standard"
                    />
                </InputFormWarp>
                <InputFormWarp>
                    <p>Name :</p>
                    <TextField
                        name="id"
                        className='inputs_textfield'
                        placeholder="Name"
                        variant="standard"
                    />
                </InputFormWarp>
                <Button className=''variant="contained">저장</Button>
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
`
const ModalWrap = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #313131;
  color: #e4e4e4;
`
const TitleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  margin-bottom: 20px;
  .titleHead{
      position:absolute;
        left:37%;
    }
  svg{
    text-align: right;
  }
`
const ContentWrap=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputFormWarp = styled.div`
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
      //width: 140px;
      padding-left: 14px;
      color: #e4e4e4;
    }
  }
`
export default JoinUsModal;