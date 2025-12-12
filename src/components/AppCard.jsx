import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

const AppCard = ({app}) => {
    const {title, image,ratingAvg,downloads} = app
    return (
        <div>
            <div className="card bg-white w-64 shadow-xl hover:scale-105 transition ease-in-out">
  <figure>
    <img className='w-48 bg-amber-200'
      src={image}
      alt="App" />
  </figure>
  <div className="card-body text-black">
    <h3>{title}</h3>
    <div className="card-actions justify-between">
      <button className='bg-gray-300 flex flex-row rounded-2xl p-2'><IoMdDownload />{downloads}</button>
      <button className='bg-gray-300  flex flex-row rounded-2xl p-2'><FaStarHalfAlt />{ratingAvg}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppCard;