import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';

const Apps = () => {
     const [search, setSearch] = useState('')
    const {apps} = useApps()
    const term = search.trim().toLowerCase()
  const searchedApps = term
    ? apps.filter(App => App.title.toLowerCase().includes(term)) 
    : apps;

    return (
        <>
        <div className='p-4 bg-gray-50'>
            <div>
            <h1 className='font-bold text-black bg-gray-50 text-3xl text-center'>Trending Apps</h1>
            <h2 className='bg-gray-50 text-gray-500 text-center p-4'>Explore All Trending Apps on the Market Developed by us</h2>
        </div>
        <div className='flex justify-between m-4'>
            <h1 className='font-bold text-black'>({searchedApps.length})Apps Found</h1>
            <label className='input bg-violet-600'>
                <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                type='search' 
                placeholder='Search App'/>
            </label>
        </div>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-50 gap-4 place-items-center'>
            {
                searchedApps.map(app => (
                    <AppCard key={app.id} app={app}/>
                ))
            }
           </div>
        </div>
        </div>
        </>
    );
};

export default Apps;