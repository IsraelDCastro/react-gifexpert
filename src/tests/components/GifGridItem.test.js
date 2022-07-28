import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests for <GifGridItem />", () => {
  const title = "A Title";
  const url = "https://localhost/something.jpg";
  const wrapper = shallow(
    <GifGridItem
      title={title}
      url={url}
    />
  );

  test("must be render <GifGridItem /> correctly", () => {

    expect(wrapper).toMatchSnapshot();
  });

  test("must have a paragraph with title", () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test("must have an image and alt of props", () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test("must have class animate__fadeIn", () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className).toMatch("animate__fadeIn");
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
