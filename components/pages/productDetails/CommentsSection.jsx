"use client";

import React, { useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { MdKeyboardArrowRight } from "react-icons/md";

const CommentsSection = ({ comments, productId, productTitle }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="w-full rounded-2xl py-3 px-4 lg:px-8 lg:py-6 bg-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h1 className="heading2">Comments ({comments.length})</h1>
        <AddComment
          productId={JSON.parse(JSON.stringify(productId))}
          productTitle={JSON.parse(JSON.stringify(productTitle))}
        />
      </div>
      <div className="space-y-3">
        {comments.length === 0 && <h1>No comments</h1>}
        {comments.length !== 0 && (
          <>
            <button
              className="flex items-center text-link mt-5"
              onClick={() => setShowComments(!showComments)}
            >
              <p className="text-[13px]">
                {showComments ? "Hide Comments" : "Show Comments"}
              </p>{" "}
              <div className="text-[18px]">
                <MdKeyboardArrowRight />
              </div>
            </button>
            {comments.map((comment) => {
              if (showComments) {
                return <Comment {...comment} key={comment._id} />;
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
