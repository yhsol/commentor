import React from "react";
import {
  render,
  fireEvent,
  wait,
  waitForElement
} from "@testing-library/react";
import DelayedToggle from "./DelayedToggle";

describe("<DealyedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    await wait(() => getByText("yeah!"), { timeout: 3000 });
  });
  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    const text = await waitForElement(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });
});
