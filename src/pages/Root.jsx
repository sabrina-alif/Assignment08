import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Root = () => {
    const navigation =useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            {navigation.state ==="loading"?(<Loading>
            </Loading>
            ) : ( <Outlet></Outlet> )}
            <Footer></Footer>
        </div>
    );
};

export default Root;