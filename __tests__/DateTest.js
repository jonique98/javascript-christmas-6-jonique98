import Date from "../src/model/Date.js";

describe("Date", () => {
  let date;

  test("주말 테스트", () => {
    // given
    date = new Date(1);

    // when
    const isWeekend = date.isWeekend();

    // then
    expect(isWeekend).toBe(true);
  });
});
