import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import Accordion from "../accordion";
import AccordionData from "../__fixture__";

describe("Accordion", () => {
  beforeEach(() => {
    act(() => {
      render(<Accordion data={AccordionData} />);
    });
  });
  it("renders correctly", () => {
    expect(screen.getByText(AccordionData[0].title)).toBeInTheDocument();
    expect(
      screen.queryByText(AccordionData[0].content)
    ).not.toBeInTheDocument();
    expect(screen.getByText(AccordionData[1].title)).toBeInTheDocument();
    expect(
      screen.queryByText(AccordionData[1].content)
    ).not.toBeInTheDocument();
  });

  it("clicking on title1 should show content1", () => {
    act(() => {
      userEvent.click(screen.getByText(AccordionData[0].title));
    });
    waitFor(() => {
      expect(screen.getByText(AccordionData[0].content)).toBeInTheDocument();
      expect(
        screen.queryByText(AccordionData[1].content)
      ).not.toBeInTheDocument();
    });
  });

  it("clicking on title2 should show content2", () => {
    act(() => {
      userEvent.click(screen.getByText(AccordionData[1].title));
    });
    waitFor(() => {
      expect(screen.getByText(AccordionData[1].content)).toBeInTheDocument();
      expect(
        screen.queryByText(AccordionData[0].content)
      ).not.toBeInTheDocument();
    });
  });
});
