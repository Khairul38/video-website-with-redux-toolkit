import React from "react";
import LikeImage from "../../assets/like.svg";
import UnlikeImage from "../../assets/unlike.svg";

const LikeUnlike = ({ likes, unlikes }) => {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex items-center gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={LikeImage} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={UnlikeImage} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
