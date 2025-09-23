import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";

// Mock geolocation
beforeAll(() => {
  global.navigator.geolocation = {
    getCurrentPosition: jest.fn((success) =>
      success({ coords: { latitude: 40.7128, longitude: -74.0060 } })
    )
  };
});

test("renders Home with location", async () => {
  render(<Home />);

  // Check if HeroCard is rendered
  await waitFor(() => {
    expect(screen.getByPlaceholderText("Enter a City...")).toBeInTheDocument();
  });
});