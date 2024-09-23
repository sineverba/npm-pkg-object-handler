import { objectHandler } from "../index";

describe("Object Handler Tests", () => {
  /**
   * Test to verify that the output is the same as the input
   * when no conversion is needed.
   */
  it("Output must be the same as input if no conversion is needed", () => {
    const initialObject = { value: 1, label: "foo" };
    const mapping = { value: "value", label: "label" };
    expect(objectHandler(initialObject, mapping)).toStrictEqual(initialObject);
  });

  /**
   * Test to ensure that the function can handle objects
   * with different keys but the same values.
   */
  it("Can handle different keys for the object but with the same values", () => {
    const initialObject = { id: 1, player_name: "foo" };
    const mapping = { value: "id", label: "player_name" };
    const output = { value: 1, label: "foo" };
    expect(objectHandler(initialObject, mapping)).toStrictEqual(output);
  });

  /**
   * Test to ensure that the function can handle objects
   * with different and more keys but the same values.
   */
  it("Can handle different keys for the object but with the same values", () => {
    const initialObject = { id: 1, player_name: "foo", rank: 1 };
    const mapping = { value: "id", label: "player_name" };
    const output = { value: 1, label: "foo" };
    expect(objectHandler(initialObject, mapping)).toStrictEqual(output);
  });
});
