import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(
    text => {
      return dispatch(addTodo(text));
    },
    [dispatch]
  );
}

export default useAddTodo;
