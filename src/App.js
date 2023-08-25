import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import NoticeDatailPage from './pages/NoticeDatailPage';
import {useEffect} from 'react';
import {Backdrop, CircularProgress} from '@mui/material';
import {useAtomValue} from 'jotai';
import {LoginAtom, TokenAtom} from './jotai/jotai';


function App() {
    const isLogin = useAtomValue(LoginAtom);
    const isToken = useAtomValue(TokenAtom);

    useEffect(() => {
        if (isLogin) {
            return false;
        }
    }, []);

    if (!LoginAtom && !TokenAtom) {
        return (
            <Backdrop
                open
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        );
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                    <Route path={'/board'} element={<NoticeBoardPage/>}></Route>
                    <Route path={'/detailBoard/:boardPk'} element={<NoticeDatailPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
