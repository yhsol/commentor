import React, { useState } from "react";
import { Todo } from "../modules/todos";
import styled from "styled-components";
import useTodoAction from "../hooks/useTodoAction";

const Text = styled.span<StyleProps>`
  cursor: pointer;
`;

const List = styled.li<StyleProps>`
  span${Text} {
    color: ${props => (props.done ? "#999999" : "")};
    text-decoration: ${props => (props.done ? "line-through" : "")};
  }
`;
const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

type TodoItemProps = {
  todo: Todo;
};

type StyleProps = {
  done?: boolean;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoAction(todo.id);
  return (
    <List done={todo.done}>
      <Text onClick={onToggle}>{todo.text}</Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </List>
  );
}

export default TodoItem;
