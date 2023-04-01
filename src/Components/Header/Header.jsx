import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mx-md-5 px-md-5 mt-3">
                <a className="fs-2 fw-bold text-black" href="/">
                    Knowledge Cafe
                </a>
                <img src="https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614919529574-VE0G0E866D3SV2T2VSBC/IMG_8833-Edit.jpg" width="40px" height="40px" className="rounded-circle" alt="" />
            </nav>
            <hr className='mt-4 container text-center ' />
        </div>
    );
};

export default Header;