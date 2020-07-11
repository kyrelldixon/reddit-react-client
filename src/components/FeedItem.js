import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { format } from "timeago.js";

export default function FeedItem({ item }) {
  const { title, upvotes, totalComments, submittedAt, user, subreddit } = item;
  return (
    <section className="text-gray-normal">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex mb-4 md:mb-0">
          <div className="flex flex-col justify-between items-center md:w-12 mr-8 md:flex-shrink-0 md:h-auto">
            <TiArrowSortedUp className="text-4xl md:text-3xl text-gray-light hover:text-gray-normal transition duration-150 ease-in-out" />
            <span className="text-xl md:text-base">{upvotes}</span>
            <TiArrowSortedDown className="text-4xl md:text-3xl text-gray-light hover:text-gray-normal transition duration-150 ease-in-out" />
          </div>
          <div className="flex-1 h-32 md:w-32 md:h-24 bg-gray-lighter rounded-lg flex-shrink-0" />
        </div>
        <div className="md:px-4 text-sm text-center md:text-left">
          <h2 className="text-lg text-gray-dark font-heading mb-2">
            <a
              href="#"
              className="hover:text-orange transition duration-150 ease-in-out"
            >
              {title}
            </a>
          </h2>
          <p className="mb-1">
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
          <ul className="flex space-x-4 md:space-x-2 text-sm justify-center md:justify-start">
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
