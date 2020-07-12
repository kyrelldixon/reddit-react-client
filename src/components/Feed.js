import React, { useState } from "react";
import FeedItem from "./FeedItem";
import mockListings from "../data/mockListings.json";

export default function Feed() {
  const [items] = useState(() => {
    return mockListings.data.children.map(({ data }) => ({
      user: data.author,
      title: data.title,
      totalComments: data.num_comments,
      subreddit: data.subreddit,
      submittedAt: data.created_utc * 1000,
      upvotes: data.ups,
      thumbnail: data.thumbnail,
      permalink: data.permalink,
    }));
  });
  return (
    <main className="h-full p-8 space-y-8 overflow-y-scroll bg-white rounded shadow">
      {items.map((item, i) => (
        <FeedItem key={i} item={item} />
      ))}
    </main>
  );
}
