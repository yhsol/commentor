import React from "react";
import styled from "styled-components";
import { useTodosAll } from "../hooks/useTodosAll";

const Text = styled.span`
  cursor: pointer;
`;

const List = styled.li`
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

function TodoItem({ todo }) {
  // onToggle, onRemove with hooks -> like const {onToggle, onRemove} = useTodosAll();
  const { onToggle, onRemove } = useTodosAll.useTodoActions(todo.id);
  return (
    <List done={todo.done}>
      <Text onClick={onToggle}>{todo.text}</Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </List>
  );
}

export default TodoItem;
