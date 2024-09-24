import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tab from "../tab";
import { act } from "react";
import TabData from "../__fixture__";

describe("Tab", () => {
  beforeEach(() => {
    act(() => {
      render(<Tab data={TabData} />);
    });
  });

  it("renders correctly", () => {
    expect(screen.getByText(TabData[0].title)).toBeInTheDocument();
    expect(screen.getByText(TabData[1].title)).toBeInTheDocument();
    expect(screen.getByText(TabData[0].description)).toBeInTheDocument();
    expect(screen.queryByText(TabData[1].description)).not.toBeInTheDocument();
  });

  it("clicking on Tab 2 will show Tab 2 description", () => {
    const tab2 = screen.getByRole("tab", { name: TabData[1].title });
    act(() => {
      userEvent.click(tab2);
    });
    expect(screen.getByText(TabData[1].description)).toBeInTheDocument();
    expect(screen.queryByText(TabData[0].description)).not.toBeInTheDocument();
  });
});
