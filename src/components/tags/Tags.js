import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Loading from "../common/Loading";
import { resetFilter } from "../../features/filter/filterSlice";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, isLoading } = useSelector((state) => state.tags);
  const { selectedTags, search, selectedAuthor } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  // reset render
  let content = null;
  if (selectedTags.length > 0 || search !== "" || selectedAuthor !== "")
    content = (
      <div
        onClick={handleResetFilter}
        className={`bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer`}
      >
        Reset Filter
      </div>
    );
  return (
    <>
      {!isLoading ? (
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
              <Tag key={tag.id} tag={tag} />
            ))}
            {content}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Tags;
