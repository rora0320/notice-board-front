import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import terenzLogo from '../image/terenz_logo_w.svg';
import kinonLogo from '../image/kinonLogin.svg';
import {TfiClose} from 'react-icons/tfi';
import styled from 'styled-components';
import JoinUsModal from './joinUsModal/JoinUsModal';
import {useSetAtom} from 'jotai';
import {LoginAtom, TokenAtom, UserAtom} from '../../jotai/jotai';
import {unAuthClient} from '../../utils/requestMethod';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #e4e4e4;
  background-color: #111;
  border: 1px solid red;

  .login__inputs_btns {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20vh;

    .inputs_textfield {
      width: 400px;
      margin-bottom: 20px;
      padding: 10px 0;

      input {
        padding-left: 14px;
        color: #e4e4e4;
        border-bottom: 1.5px solid #9e9e9e;
      }
    }

    .btns_loginBtn {
      width: 400px;
      margin-top: 40px;
      border-radius: 20px;
    }

    .resetPw {
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        opacity: 0.7;
      }
    }

    .login__warningText {
      position: absolute;
      bottom: 15%;

      color: #ff4356;
      text-align: center;
    }
  }
`;
const Logo = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 110px;
  }

  svg {
    margin: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;
const WrapForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin-top: 20vh;

  .inputs_textfield {
    width: 400px;
    border-bottom: 1.5px solid #9e9e9e;
    margin: 20px;

    input {
      width: 140px;
      padding-left: 14px;
      color: #e4e4e4;
      border-bottom: 1.5px solid #9e9e9e;
    }
  }
`;
const BetweenBtn = styled.div`
  .btns_loginBtn {
    margin-right: 20px;
  }
`;

const Login = () => {
    const [idData, setIdData] = useState('');
    const [pwData, setPwData] = useState('');
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);


    const setIsLogin = useSetAtom(LoginAtom);
    const setIsToken = useSetAtom(TokenAtom);
    const setUserInfo = useSetAtom(UserAtom);
    const openModalJoinUs = () => {
        setIsOpenAddModal(!isOpenAddModal);
    };

    const navigate = useNavigate();


    const postLoginSubmit = async () => {
        try {
            const {data} = await unAuthClient.post('/user/signin', {
                id: idData,
                password: pwData,
            });
            console.log('data', data);
            // localStorage.setItem('login_board', data.token);
            localStorage.setItem('form', JSON.stringify(data.user));
            setIsLogin(true);
            setIsToken(data.token)
            setUserInfo(JSON.stringify(data.user));

            navigate('/board');
        } catch (e) {
            alert('아이디 비밀번호를 확인하세요.', e);
            console.log('login Error', e);
        }
    };

    // 엔터로 버튼 검색버튼 활성
    const onEnterBtn = (el) => {
        if (el.key === 'Enter') {
            postLoginSubmit();
        }
    };

    // 아이디 비밀번호 입력받기
    const handleInput = (e) => {
        switch (e.target.name) {
            case 'id':
                setIdData(e.target.value);
                break;
            case 'password':
                setPwData(e.target.value);
                break;

            default:
                setIdData(null);
                setPwData(null);
                break;
        }
    };

    return (
        <>
            <Wrap>
                <Logo>
                    <img src={terenzLogo} alt="terenz_logo"/>
                    <div>
                        <TfiClose/>
                    </div>
                    <img src={kinonLogo} alt="kinon_logo"/>
                </Logo>
                <WrapForm>
                    <TextField
                        name="id"
                        className="inputs_textfield"
                        placeholder="Email Address"
                        variant="standard" // border-bottom만 있는 form
                        onChange={(e) => handleInput(e)}
                    />
                    <TextField
                        name="password"
                        type="Password"
                        className="inputs_textfield"
                        placeholder="Password"
                        variant="standard" // border-bottom만 있는 form
                        onKeyPress={onEnterBtn}
                        onChange={(e) => handleInput(e)}
                    />
                    <BetweenBtn>
                        <Button
                            className="btns_loginBtn"
                            variant="contained"
                            onClick={postLoginSubmit}
                            color="primary"
                        >
                            LOGIN
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={openModalJoinUs}
                        >
                            Join US
                        </Button>
                    </BetweenBtn>
                </WrapForm>
            </Wrap>
            {isOpenAddModal && <JoinUsModal openModalJoinUs={openModalJoinUs}/>}
        </>
    );
};

export default Login;
