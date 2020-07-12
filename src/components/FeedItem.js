import React from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { format } from "timeago.js";

export default function FeedItem({ item }) {
  const {
    title,
    upvotes,
    totalComments,
    submittedAt,
    user,
    subreddit,
    permalink,
  } = item;
  return (
    <section className="text-gray-normal">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex mb-4 md:mb-0">
          <div className="flex flex-col items-center justify-between mr-8 md:w-12 md:flex-shrink-0 md:h-auto">
            <TiArrowSortedUp className="text-4xl transition duration-150 ease-in-out md:text-3xl text-gray-light hover:text-gray-normal" />
            <span className="text-xl md:text-base">{upvotes}</span>
            <TiArrowSortedDown className="text-4xl transition duration-150 ease-in-out md:text-3xl text-gray-light hover:text-gray-normal" />
          </div>
          <div className="flex-1 flex-shrink-0 h-32 rounded-lg md:w-32 md:h-24 bg-gray-lighter" />
        </div>
        <div className="text-sm text-center md:px-4 md:text-left">
          <h2 className="mb-2 text-lg text-gray-dark font-heading">
            <Link
              to={permalink}
              className="transition duration-150 ease-in-out hover:text-orange"
            >
              {title}
            </Link>
          </h2>
          <p className="mb-1">
            submitted {format(submittedAt)} by{" "}
            <Link
              to="/"
              className="transition duration-150 ease-in-out text-gray-dark hover:text-orange"
            >
              {user}
            </Link>{" "}
            to{" "}
            <Link
              to={`/r/${subreddit}`}
              className="transition duration-150 ease-in-out text-gray-dark hover:text-orange"
            >
              r/{subreddit}
            </Link>
          </p>
          <ul className="flex justify-center space-x-4 text-sm md:space-x-2 md:justify-start">
            <li>{totalComments} comments</li>
            <li className="hidden md:block">|</li>
            <li>Share</li>
            <li className="hidden md:block">|</li>
            <li>Save</li>
            <li className="hidden md:block">|</li>
            <li>Hide</li>
            <li className="hidden md:block">|</li>
            <li>Report</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
