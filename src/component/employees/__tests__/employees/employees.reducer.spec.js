const {
  fetchEmployeeSuccess,
  fetchEmployeeRequest,
  fetchEmployeeFailure,
} = require("../../reducer/employees.reducer");

describe("Fetching the employees", () => {
  describe("onRequest fetch", () => {
    it('should set isLoading to "true" on fetch request', () => {
      const newState = fetchEmployeeRequest(undefined);
      expect(newState.isLoading).toEqual(true);
    });
  });

  describe("onSuccess fetch", () => {
    it('should set isLoading to "false" on success fetch', () => {
      const oldState = { isLoading: true };
      const newState = fetchEmployeeSuccess(oldState);
      expect(newState.isLoading).toEqual(false);
    });

    it("should store the employees data", () => {
      const oldState = { data: [], isLoading: true };
      const fakeEmployees = [{ name: {}, picture: {} }];

      const newState = fetchEmployeeSuccess(oldState, fakeEmployees);
      expect(newState.data).not.toEqual([]);
      expect(newState.data).toEqual(fakeEmployees);
      expect(newState.isLoading).toEqual(false);
    });
  });

  describe("onFailure fetch", () => {
    it('should set isLoading to "false" on failed fetch', () => {
      const oldState = { isLoading: true };
      const newState = fetchEmployeeFailure(oldState);
      expect(newState.isLoading).toEqual(false);
    });

    it("should set error message on failed fetch", () => {
      const oldState = { isLoading: true, error: null };
      const errorMsg = "an error occurred";
      const newState = fetchEmployeeFailure(oldState, errorMsg);
      expect(newState.isLoading).toEqual(false);
      expect(newState.error).not.toEqual(null);
      expect(newState.error).toEqual(errorMsg);
    });
  });
});
