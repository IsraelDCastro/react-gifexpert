import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Tests in <GifExpertApp />", () => {
  test("must be rendered correctly", () => {
    const wrapper = shallow(<GifExpertApp/>);

    expect(wrapper).toMatchSnapshot();
  });

  test("must be a list categories", () => {
    const categories = ['One Piece', 'Boku no Hero Academy', 'Full Metal Archemist Brotherhood'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
