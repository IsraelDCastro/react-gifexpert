import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Tests in <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("must be rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("must change input text", () => {
    const input = wrapper.find('input');
    const value = "Hello world";
    input.simulate('change', {
      target: {
        value: value
      }
    });
  });

  test("must not post the information with submit", () => {
    const form = wrapper.find('form');
    form.simulate('submit', {
      preventDefault(){}
    })
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("must call call setCategories and clear the input", () => {
    const input = wrapper.find('input');
    const value = "Hello world";
    input.simulate('change', {
      target: {
        value: value
      }
    });

    const form = wrapper.find('form');
    form.simulate('submit', {
      preventDefault(){}
    })

    expect(setCategories).toHaveBeenCalled();
    expect(input.text()).toBe("");
  });
});
