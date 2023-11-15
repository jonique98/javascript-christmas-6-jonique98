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

  test("평일 테스트", () => {
    // given
    date = new Date(3);

    // when
    const isWeekend = date.isWeekend();

    // then
    expect(isWeekend).toBe(false);
  });

  test("특별 날짜 테스트", () => {
    // given
    date = new Date(3);

    // when
    const isSpecialDay = date.isSpecialDay();

    // then
    expect(isSpecialDay).toBe(true);
  });

  test("특별 날짜가 아닌 날 테스트", () => {
    // given
    date = new Date(1);

    // when
    const isSpecialDay = date.isSpecialDay();

    // then
    expect(isSpecialDay).toBe(false);
  });
});
