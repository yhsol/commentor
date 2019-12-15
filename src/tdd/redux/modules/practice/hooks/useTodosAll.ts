import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../..";
import { useCallback } from "react";
import { addTodo, toggleTodo, removeTodo } from "../../todos";

export function useTodoslist() {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
}

export function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}

export function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);
  return { onToggle, onRemove };
}

export const useTodosAll = { useTodoslist, useAddTodo, useTodoActions };
