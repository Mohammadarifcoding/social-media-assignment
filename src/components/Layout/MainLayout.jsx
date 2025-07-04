import React from 'react';
import Sidebar from '../../shared/sidebar/Sidebar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;