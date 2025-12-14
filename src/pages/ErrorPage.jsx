import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center gap-3.5'>
            <img src="../../assets/error-404.png" alt="Error" className='w-l p-5' />
            <p>Oops, page not found!</p>
            <p>The page you are looking for is not available.</p>
            <button className="bg-gradient-to-r from-violet-700 to-violet-400 p-2 rounded-2xl">Go Back!</button>
        </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;