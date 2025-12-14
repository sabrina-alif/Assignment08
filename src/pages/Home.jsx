import React from 'react';
import Banner from '../components/Banner';
import { Link } from "react-router";
import AppCard from '../components/AppCard';
import useApps from '../hooks/useApps';


const Home = () => {
    const {apps} = useApps()
    const featuredApp = apps.slice(0,6)
    return (
        <>
        <div>
            <Banner></Banner>
        </div>
        <div>
            <h1 className='font-bold text-black bg-gray-50 text-3xl text-center'>Trending Apps</h1>
            <h2 className='bg-gray-50 text-gray-500 text-center p-4'>Explore All Trending Apps on the Market Developed by us</h2>
        </div>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-50 gap-4 place-items-center'>
            {
                featuredApp.map(app => (
                    <AppCard key={app.id} app={app}/>
                ))
            }
           </div>
        </div>
        <div className='bg-gray-50 flex      justify-center'>
            <Link to='/apps' className='bg-violet-600 btn bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl m-2.5'>See All</Link>
        </div>
        </>
    );
};

export default Home;