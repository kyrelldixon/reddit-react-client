import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Feed from "./Feed";

function App() {
  return (
    <div className="flex w-full h-full font-body md:fixed">
      <Sidebar />
      <div className="w-full h-full px-4 bg-gray-lightest md:px-12">
        <Header />
        <Switch>
          <Route to="/">
            <Feed />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
