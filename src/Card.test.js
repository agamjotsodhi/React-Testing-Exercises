// Card.test.js
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
