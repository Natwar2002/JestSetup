import { render, screen } from "@testing-library/react";
import DayCard from "./DayCard";

test("renders day, icon, and temperature", () => {
  render(<DayCard day="Monday" icon="test-icon.png" temperature={25} />);

  // Check day is rendered
  expect(screen.getByText("Monday")).toBeInTheDocument();

  // Check temperature is rendered
  expect(screen.getByText(/Temperature: 25°C/)).toBeInTheDocument();

  // Check icon is rendered
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", "test-icon.png");
});