import React from "react";
import { useDispatch } from "react-redux";
import LikeImage from "../../assets/like.svg";
import UnlikeImage from "../../assets/unlike.svg";
import { patchVideoAsync } from "../../features/video/videoSlice";

const LikeUnlike = ({ id, likes, unlikes }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    const value = likes + 1;
    dispatch(patchVideoAsync({ id, value, condition: "like" }));
  };
  const handleUnlike = () => {
    const value = unlikes + 1;
    dispatch(patchVideoAsync({ id, value, condition: "unlike" }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={handleLike}
      >
        <div className="shrink-0">
          <img className="w-5 block" src={LikeImage} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={handleUnlike}
      >
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
