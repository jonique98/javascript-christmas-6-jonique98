import Benefits from "../src/model/Benefits";

describe("Benefits", () => {
  const benefits = new Benefits();

  test("주말 할인", () => {
    // given
    const mainOrder = 5;

    // when
    const weekendDiscount = benefits.weekendDiscount(mainOrder);

    // then
    expect(weekendDiscount).toBe(10115);
  });

  test("평일 할인", () => {
    // given
    const desertOrder = 5;

    // when
    const weekdayDiscount = benefits.weekdayDiscount(desertOrder);

    // then
    expect(weekdayDiscount).toBe(10115);
  });
});
