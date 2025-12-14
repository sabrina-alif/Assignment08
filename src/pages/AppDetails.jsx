import React from 'react';
import { useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import useApps from "../hooks/useApps";
import AppError from './AppError';

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find(a => String(a.id) === id);

  if (!app) {
    return <AppError/>;
  }

   if (!isInstalled) {
    const installed =
      JSON.parse(localStorage.getItem("installed")) || [];
    if (installed.some(a => a.id === app.id)) {
      setIsInstalled(true);
    }
  }

  const {image,title,companyName,description,reviews,
ratingAvg,downloads,ratings
  } = app;

  const handleAddToInstalled = () => {
    const existing =
      JSON.parse(localStorage.getItem("installed")) || [];

    if (existing.some(a => a.id === app.id)) return;

    const updated = [...existing, app];
    localStorage.setItem("installed", JSON.stringify(updated));
    setIsInstalled(true);
  };

  const maxRating = Math.max(...ratings.map(r => r.count));

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={image}
          alt={title}
          className="w-48 h-48 object-contain rounded-xl border bg-white"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black">
            {title}
          </h1>

          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-violet-600 font-semibold">
              {companyName}
            </span>
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <IoMdDownload className="text-green-500 text-2xl" />
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold text-black">
                {downloads.toLocaleString()}
              </p>
            </div>

            <div>
              <FaStar className="text-orange-500 text-2xl" />
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-bold text-black">{ratingAvg}</p>
            </div>

            <div>
              <FaStar className="text-purple-500 text-2xl" />
              <p className="text-sm text-gray-500">Reviews</p>
              <p className="font-bold text-black">
                {reviews.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={handleAddToInstalled}
            disabled={isInstalled}
            className={`mt-6 px-6 py-2 rounded-md font-semibold
              ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <hr className="my-10" />

      <h2 className="text-xl font-bold mb-4 text-black">
        Ratings
      </h2>

      <div className="space-y-3">
        {[...ratings].reverse().map(r => (
          <div key={r.name} className="flex items-center gap-4">
            <span className="w-14 text-sm text-gray-600">
              {r.name}
            </span>

            <div className="flex-1 bg-gray-200 rounded h-4">
              <div
                className="bg-orange-500 h-4 rounded"
                style={{
                  width: `${(r.count / maxRating) * 100}%`
                }}
              />
            </div>

            <span className="w-12 text-sm text-gray-500">
              {r.count}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-10" />

      <h2 className="text-xl font-bold mb-3 text-black">
        Description
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default AppDetails;
