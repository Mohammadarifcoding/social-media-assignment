import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto w-full py-10'>
            {children}
        </div>
    );
};

export default Container;