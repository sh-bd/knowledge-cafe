import React from 'react';

const Cart = ({ times, texts }) => {
    return (
        <div className='position-sticky top-0'>
            <p style={{ 'color': '#6047EC', 'background': '#EFEDFD' }} className='btn  border border-3 fw-bold fs-5 py-3 w-100'>Spent time on read : {times} min</p>
            <div className='card bg-secondary bg-opacity-25'>
                <p className='fw-bold fs-5'>Bookmarked Blogs : {texts.length}</p>
                {
                    texts.map(text => <p className='card bg-light'>{text}</p>)
                }
            </div>
        </div>
    );

};

export default Cart;