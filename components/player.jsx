import React from "react";

const Player = ({ name, points, avatar }) => {
  return (
    <div className="flex flex-col space-y-[10%]">
      {/* headshot */}
      <img
        className="xs:h-12 xs:w-12 inline-block h-10 w-10 rounded-full bg-[#f0f0f0] ring-2 ring-white"
        src={avatar}
        alt=""
      />
      {/* name */}
      <span className="xs:text-[0.5rem] text-center font-sans text-[0.4rem] font-light uppercase">
        {name}
      </span>
      {/* points */}
      <div className="ring-inset-1 xs:h-8 xs:w-8 mx-auto h-7 w-7 rounded-full bg-[#ffffff] ring-2 ring-[#f0f0f0] ring-offset-1 ring-offset-[#8a8a8a]">
        <span className="xs:text-base flex h-full flex-col items-center justify-center text-xs text-[#8a8a8a]">
          {points}
        </span>
      </div>
      <span className="xs:text-[0.7rem] text-center font-sans text-[0.6rem] font-light uppercase">
        PTS
      </span>
    </div>
  );
};

export default Player;
