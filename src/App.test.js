import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('renders Robotic Portal text', () => {
  render(<App />);
  const heading = screen.getByText(/Robotic Portal/i);
  expect(heading).toBeInTheDocument();
});


test('renders Search Component', () => {
  render(<App />);
  const search = screen.getByPlaceholderText("Search by Id");
  expect(search).toBeInTheDocument();
});


test('renders Table Component', () => {
  render(<App />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});


test('renders table heading ID', () => {
  render(<App />);
  const id = screen.getByText(/ID/i);
  expect(id).toBeInTheDocument();
});


test('renders table heading with text content ID', () => {
  render(<App />);
  const id = screen.getByText(/ID/i);
  expect(id).toHaveTextContent("ID");
});


test('renders table heading Battery Level', () => {
  render(<App />);
  const batteryLevel = screen.getByText(/Battery Level/i);
  expect(batteryLevel).toBeInTheDocument();
}
);


test('renders table heading with text content Battery Level', () => {
  render(<App />);
  const batteryLevel = screen.getByText(/Battery Level/i);
  expect(batteryLevel).toHaveTextContent("Battery Level");
}
);


test('renders table heading Y Coordinate', () => {
  render(<App />);
  const yCoordinate = screen.getByText(/Y Coordinate/i);
  expect(yCoordinate).toBeInTheDocument();
});


test('renders table heading with text content Y Coordinate', () => {
  render(<App />);
  const yCoordinate = screen.getByText(/Y Coordinate/i);
  expect(yCoordinate).toHaveTextContent("Y Coordinate");
}
);


test('renders table heading X Coordinate', () => {
  render(<App />);
  const xCoordinate = screen.getByText(/X Coordinate/i);
  expect(xCoordinate).toBeInTheDocument();
}
);


test('renders table heading with text content X Coordinate', () => {
  render(<App />);
  const xCoordinate = screen.getByText(/X Coordinate/i);
  expect(xCoordinate).toHaveTextContent("X Coordinate");
}
);  



test('test if arrow icon is clickable', () => {
  render(<App />);
  const arrow = screen.getByTestId("arrow");
  fireEvent.click(arrow);
  expect(arrow).toBeEnabled();
});


test('test arrow icon class changed to bi bi-arrow-down-up me-2', () => {
  render(<App />);
  const arrow = screen.getByTestId("arrow");
  fireEvent.click(arrow);
  expect(arrow).toHaveClass("bi bi-arrow-down-up me-2");
});


test('test if input field can be typed in', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Search by Id");
  fireEvent.change(input, {target: {value: "1"}});
  expect(input).toHaveValue("1");
});





