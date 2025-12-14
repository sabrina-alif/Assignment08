import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Installed = () => {

  const [sortOrder, setSortOrder] = useState("");

  const [installed, setInstalled] = useState(() => {
    return JSON.parse(localStorage.getItem("installed")) || [];
  });

  const handleUninstall = (id) => {
    const updated = installed.filter(app => app.id !== id);
    setInstalled(updated);
    localStorage.setItem("installed", JSON.stringify(updated));
    toast.success("App uninstalled successfully");
  };

  const sortedInstalled = [...installed].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.downloads - a.downloads;
    }
    if (sortOrder === "low-high") {
      return a.downloads - b.downloads;
    }
    return 0;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-black mb-6">
          {installed.length} Apps Installed
        </h1>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded text-black"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {installed.length === 0 && (
        <p className="text-gray-500">No apps installed yet</p>
      )}

      <div className="space-y-4">

        {sortedInstalled.map(app => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="font-semibold text-black">
                  {app.title}
                </h2>

                <p className="text-sm text-gray-500 flex gap-3">
                  <span className="flex items-center gap-1">
                    <IoMdDownload /> {app.downloads}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStarHalfAlt /> {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Installed;

