import React from 'react';
import { Atom } from 'react-loading-indicators';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[60vh] w-full'>
            <Atom color="#f59e0b" size="large" text="" textColor="" />
        </div>
    );
};

export default Loading;