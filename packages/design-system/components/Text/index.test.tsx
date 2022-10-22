import { Text } from "./index";
import { customRender } from "@boni/test-commons/react-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h2">Sample Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
