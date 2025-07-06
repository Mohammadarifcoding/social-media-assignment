import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Avatar = ({avatar}) => {
    return (
        <div>
            { avatar ?
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                         
                            <img src={`${import.meta.env.VITE_SERVER_URL}/${avatar}`} alt="User avatar" className="w-full h-full object-cover" />
                         
            
                        </div>:<FaUserCircle  className='text-2xl'/>  }
        </div>
    );
};

export default Avatar;