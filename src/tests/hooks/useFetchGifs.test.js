import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react";

describe("Tests in useFetchGifs hook", () => {

  test("must return a initial data", () => {

    const { result } = renderHook( () => useFetchGifs('One piece'));
    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();

  });

  test("must return an array with images and loading false", async () => {
    const { result } = await renderHook( () => useFetchGifs('One piece'));
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy()
  });
});
