import React from "react";
import { useSelector } from "react-redux";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./Todos/TodoList";

const ReduxExamples = () => {
  const helloState = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
};

export default ReduxExamples;
