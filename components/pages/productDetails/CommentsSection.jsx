import React from "react";
import AddComment from "./AddComment";

const CommentsSection = ({ comments, productId, productTitle }) => {
  return (
    <div className="w-full rounded-2xl py-3 px-4 lg:px-8 lg:py-6 bg-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="heading2">Comments ({comments.length})</h1>
        <AddComment
          productId={JSON.parse(JSON.stringify(productId))}
          productTitle={JSON.parse(JSON.stringify(productTitle))}
        />
      </div>
    </div>
  );
};

export default CommentsSection;
