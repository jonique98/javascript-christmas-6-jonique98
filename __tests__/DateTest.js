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

  test("크리스마스 전 테스트", () => {
    // given
    const christmasEve = new Date(24);
    const christmas = new Date(25);

    // when
    const isBeforeChristmas = christmasEve.isBeforeChristmas();
    const isChristmas = christmas.isBeforeChristmas();

    // then
    expect(isBeforeChristmas).toBe(true);
    expect(isChristmas).toBe(true);
  });

  test("크리스마스 이후 테스트", () => {
    // given
    const christmas = new Date(26);

    // when
    const isChristmas = christmas.isBeforeChristmas();

    // then
    expect(isChristmas).toBe(false);
  });
});
