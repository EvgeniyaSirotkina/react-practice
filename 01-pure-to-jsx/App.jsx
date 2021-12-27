import React from "react";
import { TestFunc } from "./TestFunc";

export const App = () => {
    return (
      <div>
        <TestFunc title="Test1" data="test1" />
        <TestFunc title="Test2" data="test2" />
        <TestFunc title="Test3" data="test3" />
      </div>
    );
  };