import Date from "../src/model/Date.js";

describe("Date 클래스 메소드 테스트", () => {
  let date;

  test("31일이 넘는 날짜 validate 테스트", () => {
    // given
    const invalidDate = "32";

    // when
    const validate = () => new Date(invalidDate);

    // then
    expect(validate).toThrow();
  });

  test("1일 미만 날짜 validate 테스트", () => {
    // given
    const invalidDate = "0";

    // when
    const validate = () => new Date(invalidDate);

    // then
    expect(validate).toThrow();
  });

  test("숫자가 아닌 날짜 validate 테스트", () => {
    // given
    const invalidDate = "a";

    // when
    const validate = () => new Date(invalidDate);

    // then
    expect(validate).toThrow();
  });

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

  test("크리스마스가 남은 날짜 테스트", () => {
    // given
    const christmasEve = new Date(1);
    const christmas = new Date(25);

    // when
    const christmasEveLeftDate = christmasEve.christmasLeftDate();
    const christmasLeftDate = christmas.christmasLeftDate();

    // then
    expect(christmasEveLeftDate).toBe(0);
    expect(christmasLeftDate).toBe(24);
  });

  test("이벤트 메시지 테스트", () => {
    // given
    const date = new Date(25);

    // when
    const dateEventMessage = date.dateEventMessage();

    // then
    expect(dateEventMessage).toBe("12월 25일");
  });
});
