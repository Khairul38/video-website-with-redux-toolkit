import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(tag.title) ? true : false;

  const handleTagSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(tag.title));
    } else {
      dispatch(tagSelected(tag.title));
    }
  };

  return (
    <div
      onClick={handleTagSelect}
      className={`px-4 py-1 rounded-full cursor-pointer ${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      }`}
    >
      {tag.title}
    </div>
  );
};

export default Tag;
