import React from "react";
import { render } from "@testing-library/react";
import Main from "../../components/pages/Main";
import Detail from "../../components/pages/Detail";

describe("<Detail />", () => {
  it("has title", () => {
    const { getByText } = render(<Detail />);
    getByText("detail");
  });
});
