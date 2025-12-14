import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppError = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3.5'>
            <img src="../../assets/App-Error.png" alt="Error" className='w-l p-5' />
            <p>Oops, App not found!</p>
            <p>The app you are looking for is not available.</p>
            <button className="bg-gradient-to-r from-violet-700 to-violet-400 p-2 rounded-2xl">Go Back!</button>
        </div>
    );
};

export default AppError;