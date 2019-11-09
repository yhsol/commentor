import React, { useState } from "react";
import styled from "styled-components";

const FakeboxContainer = styled.div`
  margin: 0 auto 0 auto;
  min-width: 410px;
  width: var(--content-width);
`;

const Fakebox = styled.div`
  /* background: white;
  border-radius: 22px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  box-sizing: border-box;
  font-size: 16px;
  height: 44px; */
  margin: 0 auto;
  max-width: 584px;
  /* opacity: 1; */
  /* position: relative; */
  /* transition: none; */
`;

const FakeboxSearchIcon = styled.div`
  background: 24px 24px rgb(117, 117, 117);
  bottom: 0;
  height: 24px;
  left: 0;
  margin: auto 0;
  margin-inline-start: 16px;
  position: absolute;
  top: 0;
  width: 24px;
`;

const FakeboxText = styled.div`
  bottom: 0;
  color: rgb(117, 117, 117);
  font-size: 16px;
  height: 44px;
  left: 0;
  line-height: 44px;
  margin: auto 0;
  overflow: hidden;
  padding-inline-start: 48px;
  position: absolute;
  right: 44px;
  text-align: initial;
  text-overflow: ellipsis;
  top: 0;
  vertical-align: middle;
  visibility: inherit;
  white-space: nowrap;
`;

const FakeboxInput = styled.input`
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  margin: 0;
  opacity: 0;
  padding-inline-start: 20px;
  top: 0;
  width: 100%;
  background: white;
  border-radius: 22px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  font-size: 16px;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
  opacity: 1;
  position: relative;
  transition: none;
  line-height: 44px;
`;

const FakeboxCursor = styled.div`
  background: #333;
  bottom: 14px;
  left: 48px;
  position: absolute;
  top: 14px;
  visibility: hidden;
  width: 1px;
`;

const FakeboxMicrophone = styled.div`
  background: #333;
  bottom: 14px;
  left: 48px;
  position: absolute;
  top: 14px;
  visibility: hidden;
  width: 1px;
`;

function Input() {
  const [value, setValue] = useState("search value");
  return (
    <Fakebox>
      <FakeboxInput placeholder="search" />
    </Fakebox>
  );
}

export default Input;
