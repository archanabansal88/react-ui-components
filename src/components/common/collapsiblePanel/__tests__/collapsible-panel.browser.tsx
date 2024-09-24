import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import CollapsiblePanel from "../collapsible-panel";
import CollapsiblePanelData from "../__fixture__";

describe("CollapsiblePanel", () => {
  beforeEach(() => {
    render(<CollapsiblePanel data={CollapsiblePanelData} />);
  });
  it("render correctly", () => {
    expect(screen.getAllByText(/Section/).length).toBe(3);
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("clicking on title toggle the content", () => {
    const titleClick = screen.getAllByRole("button");
    act(() => {
      userEvent.click(titleClick[0]);
    });

    waitFor(() => {
      expect(screen.getByText(CollapsiblePanelData[0].content)).toBeVisible();
    });

    act(() => {
      userEvent.click(titleClick[0]);
    });
    waitFor(() => {
      expect(
        screen.getByText(CollapsiblePanelData[0].content)
      ).not.toBeVisible();
    });
  });
});
