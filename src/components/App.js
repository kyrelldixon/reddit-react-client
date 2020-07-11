import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Feed from "./Feed";

function App() {
  return (
    <div className="font-body flex fixed h-full w-full">
      <Sidebar />
      <div className="bg-gray-lightest h-full w-full px-12">
        <Header />
        <Feed />
      </div>
    </div>
  );
}

export default App;
