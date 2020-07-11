import React, { useState } from "react";
import FeedItem from "./FeedItem";
import generateItems from "../utils/generateItems";

export default function Feed() {
  const [items] = useState(generateItems(10));
  return (
    <main className="shadow bg-white rounded p-8 space-y-8 overflow-y-scroll h-full">
      {items.map((item, i) => (
        <FeedItem item={item} />
      ))}
    </main>
  );
}
