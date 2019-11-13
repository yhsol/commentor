import React from "react";
import {
  render,
  fireEvent,
  wait,
  waitForElement,
  waitForDomChange,
  waitForElementToBeRemoved
} from "@testing-library/react";
import DelayedToggle from "./DelayedToggle";

describe("<DelayedToggle />", () => {
  it("reveals text when is toggle ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    await wait(() => getByText("yeah!!"));
  });
  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    const text = await waitForElement(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });
  it("changes something when button is clicked", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    const mutation = await waitForDomChange({ container });
    console.log(mutation);
  });
  it("removes text when toggle is OFF", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("toggle");
    fireEvent.click(toggleButton);
    await waitForDomChange({ container });
    getByText("yeah!!");
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText("yeah!!"));
  });
});
