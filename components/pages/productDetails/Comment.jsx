import moment from "moment";
import React from "react";

const Comment = ({ title, description, senderId, createdAt }) => {
  return (
    <div className="bg-white cardShadow rounded-xl py-4 px-5">
      <h1 className="font-bold text-[20px] mb-5">{title}</h1>
      <p className="font-light text-[14px]">{description}</p>
      <hr className="my-3" />
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 py-3 px-4 rounded-full w-fit">
          {senderId.displayName[0]}
        </div>
        <div>
          <h1 className="font-medium text-[15px] capitalize -mb-1.5">
            {senderId.displayName}
          </h1>
          <span className="text-[11px] text-gray-500">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
