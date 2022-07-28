import { getGifs } from "../../helpers/getGifs";

describe("Tests in getGifs fetch", () => {

  test("must return 10 items", async () => {
    const gifs = await getGifs('One piece');
    expect(gifs.length).toBe(10);
  });

  test("must return 0 items", async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

});
