import { default as axios } from "axios";
import { default as apiService } from "../api.service";

describe("random user api", () => {
  const fakeUsers = {
    results: [
      {
        name: {
          title: "Mr/Mrs",
          first: "any_first_name",
          last: "any_last_name",
        },
        picture: {
          large: "any_large_url",
          medium: "any_medium_url",
          thumbnail: "any_thumb_url",
        },
      },
    ],
  };
  
  it("fetchEmployeesAsync() ", async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: fakeUsers }));
    const result = await apiService.fetchEmployeesAsync();
    expect(result).toEqual(fakeUsers.results)
  });
});
