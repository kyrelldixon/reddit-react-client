import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { format } from "timeago.js";

export default function FeedItem({ item }) {
  const { title, upvotes, totalComments, submittedAt, user, subreddit } = item;
  return (
    <section className="text-gray-normal">
      <div className="flex items-center">
        <div className="flex flex-col items-center w-12 mr-8 flex-shrink-0">
          <TiArrowSortedUp className="text-3xl text-gray-light hover:text-gray-normal transition duration-150 ease-in-out" />
          <span>{upvotes}</span>
          <TiArrowSortedDown className="text-3xl text-gray-light hover:text-gray-normal transition duration-150 ease-in-out" />
        </div>
        <div className="w-32 h-24 bg-gray-lighter rounded-lg flex-shrink-0" />
        <div className="px-4 text-sm space-y-1">
          <h2 className="text-lg text-gray-dark font-heading">
            <a
              href="#"
              className="hover:text-orange transition duration-150 ease-in-out"
            >
              {title}
            </a>
          </h2>
          <p>
            submitted {format(submittedAt)} by{" "}
            <a
              href="#"
              className="text-gray-dark hover:text-orange transition duration-150 ease-in-out"
            >
              {user}
            </a>{" "}
            to{" "}
            <a
              href="#"
              className="text-gray-dark hover:text-orange transition duration-150 ease-in-out"
            >
              r/{subreddit}
            </a>
          </p>
          <ul className="flex space-x-2">
            <li>{totalComments} comments</li>
            <li>|</li>
            <li>Share</li>
            <li>|</li>
            <li>Save</li>
            <li>|</li>
            <li>Hide</li>
            <li>|</li>
            <li>Report</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
