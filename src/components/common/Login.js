import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { unAuthClient } from '../../utils/requestMethod';
import s from './login.module.scss';
import terenzLogo from '../image/terenz_logo_w.svg';
import kinonLogo from '../image/kinonLogin.svg';
import { TfiClose } from 'react-icons/tfi';

const Login = () => {
    const [idData, setIdData] = useState('');
    const [pwData, setPwData] = useState('');
    const [resetPw, setResetPw] = useState(false);

    const handleReset = () => {
        setResetPw(!resetPw);
    };

    const navigate = useNavigate();

    const postLoginSubmit = async () => {
        try {
            const { data } = await unAuthClient.post('/user', {
                id: idData,
                password: pwData,
            });
            console.log('data',data)
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
        <div className={s.login}>
            <div className={s.login__logos}>
                <div className={s.logos_terenzLogo}>
                    <img src={terenzLogo} alt="terenz_logo" />
                </div>
                <div>
                    <TfiClose />
                </div>
                <div className={s.logos_kinonLogo}>
                    <img src={kinonLogo} alt="kinon_logo" />
                </div>
            </div>
            <div className={s.login__inputs_btns}>
                <TextField
                    name="id"
                    className={s.inputs_textfield}
                    placeholder="Email Address"
                    variant="standard" // border-bottom만 있는 form
                    onChange={(e) => handleInput(e)}
                />
                <TextField
                    name="password"
                    type="Password"
                    className={s.inputs_textfield}
                    placeholder="Password"
                    variant="standard" // border-bottom만 있는 form
                    onKeyPress={onEnterBtn}
                    onChange={(e) => handleInput(e)}
                />

                    <Button
                        className={s.btns_loginBtn}
                        variant="contained"
                        onClick={postLoginSubmit}
                        color="primary"
                    >
                        LOGIN
                    </Button>
                {/* rest page 필요 */}

                <p className={s.resetPw} onClick={handleReset}>
                    Reset Password
                </p>
                {resetPw ? (
                    <div className={s.login__warningText}>
                        Please contact the administrator to change your Password.
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Login;
