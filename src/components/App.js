import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Feed from "./Feed";

function App() {
  return (
    <div className="flex w-full h-full font-body md:fixed">
      <Sidebar />
      <div className="w-full h-full px-4 bg-gray-lightest md:px-12">
        <Header />
        <Feed />
      </div>
    </div>
  );
}

export default App;
