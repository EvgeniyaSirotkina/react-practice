import React from "react";
import { TestFunc } from "./TestFunc";
import { Preloader } from "./Preloader";

export const App = (props) => {
    return props.isLoading ? (
        <Preloader />
      ) : (
        <div>
          <TestFunc title="Test1" data="test1" />
          <TestFunc title="Test2" data="test2" />
          <TestFunc title="Test3" data="test3" />
        </div>
      );
  };