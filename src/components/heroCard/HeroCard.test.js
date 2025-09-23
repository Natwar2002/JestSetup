import { render, screen, fireEvent } from "@testing-library/react";
import HeroCard from "./HeroCard";
import * as api from "../../api";

// Mock API
jest.mock("../../api");

const mockWeatherData = {
  location: { name: "London" },
  current: { temp_c: 15, condition: { text: "Sunny", icon: "icon.png" } },
  forecast: {
    forecastday: [
      { date: "2025-09-23", day: { avgtemp_c: 20, condition: { icon: "icon.png" } } }
    ]
  }
};

test("fetches and displays weather data when locationString is provided", async () => {
  api.getForecastData.mockResolvedValue(mockWeatherData);

  render(<HeroCard locationString="51.5072,0.1276" />);

  // Wait for data to appear
  expect(await screen.findByText("London")).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 15°C/)).toBeInTheDocument();
  expect(screen.getByText("Sunny")).toBeInTheDocument();
});

test("search input updates city state", () => {
  render(<HeroCard locationString="" />);

  const input = screen.getByPlaceholderText("Enter a City...");
  fireEvent.change(input, { target: { value: "Paris" } });

  expect(input.value).toBe("Paris");
});