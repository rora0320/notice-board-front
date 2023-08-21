import React from 'react';
import kinonLogo from '../image/kinonHeader.svg'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <div className={s.header_logo}>
                    <Link to="/board">
                        <img src={kinonLogo} alt="logo_image" />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;