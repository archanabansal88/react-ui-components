import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "../carousel";
import { act } from "react";
import CarouselData from "../__fixture__";

describe("Carousel", () => {
  beforeEach(() => {
    act(() => {
      render(<Carousel data={CarouselData} />);
    });
  });
  it("renders correctly", () => {
    expect(screen.getByText(CarouselData[0].title)).toBeInTheDocument();
    expect(screen.queryByText(CarouselData[1].title)).not.toBeInTheDocument();
  });

  it("clicking on left arrow should show next image", () => {
    act(() => {
      userEvent.click(screen.getByTestId("next"));
    });
    expect(screen.queryByText(CarouselData[1].title)).toBeVisible();

    act(() => {
      userEvent.click(screen.getByTestId("next"));
    });
    expect(screen.queryByText(CarouselData[2].title)).toBeVisible();
  });

  it("clicking on right arrow should show previous image", () => {
    act(() => {
      userEvent.click(screen.getByTestId("previous"));
    });
    waitFor(() => {
      expect(screen.queryByText(CarouselData[1].title)).toBeVisible();
    });

    act(() => {
      userEvent.click(screen.getByTestId("previous"));
    });
    waitFor(() => {
      expect(screen.queryByText(CarouselData[0].title)).toBeVisible();
    });
  });
});
