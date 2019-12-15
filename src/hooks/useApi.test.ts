import { renderHook, RenderHookResult } from "@testing-library/react-hooks";
import TestRenderer from "react-test-renderer";
import UseApi, { useApiReturnType } from "./useApi";

const { act } = TestRenderer;
const fakeApi = () => Promise.resolve("test result");

describe("useApiHook", () => {
  it("should have consume api and returns correct response", async () => {
    const {
      result
    }: RenderHookResult<() => Promise<any>, useApiReturnType> = renderHook(() =>
      UseApi(fakeApi)
    );

    await act(async () => {
      result.current.fetchApi();
    });

    expect(result.current.response).toEqual("test result");
  });
});
