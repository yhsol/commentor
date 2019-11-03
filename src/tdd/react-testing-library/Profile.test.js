import React from "react";
import Profile from "./Profile";
import { render } from "@testing-library/react";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="username" name="name" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="username" name="name" />);
    utils.getByText("username");
    utils.getByText("(name)");
    utils.getAllByText(/name/);
  });
});
