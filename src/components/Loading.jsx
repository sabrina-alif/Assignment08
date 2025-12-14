import React from 'react';

const Loading = () => {
     return (
    <div className="flex items-center justify-center gap-2 py-10">
      <span className="text-xl font-semibold tracking-widest text-gray-600">
        L
      </span>
      <div
        className="
          w-0 h-0
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          border-b-[18px] border-b-violet-600
          animate-spin
        "
      ></div>

      <span className="text-xl font-semibold tracking-widest text-gray-600">
        OADING
      </span>
    </div>
  );
};

export default Loading;