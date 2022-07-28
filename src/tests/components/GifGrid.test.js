import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests in <GifGrid />", () => {
  const category = "One piece";

  test("must be rendered correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("must show item when images loaded useFetchGifs", () => {
    const images = [{
      id: 'abc',
      url: "https://localhost:8080/something.jpeg",
      title: "Something else"
    }]
    useFetchGifs.mockReturnValue({
      data: images,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
});
