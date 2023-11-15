import Benefits from "../src/model/Benefits";

describe("Benefits", () => {
  let benefits;

  beforeEach(() => {
    benefits = new Benefits();
  });

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

  test("크리스마스 할인", () => {
    // given
    const dateBeforeChristmas = 3;

    // when
    const christmasDiscount = benefits.christmasDiscount(dateBeforeChristmas);

    // then
    expect(christmasDiscount).toBe(1300);
  });

  test("특별 할인", () => {
    // given
    const specialDay = true;

    // when
    const specialDiscount = benefits.specialDiscount(specialDay);

    // then
    expect(specialDiscount).toBe(1000);
  });

  test("증정 이벤트", () => {
    // given
    const moreThanTwelveThousand = true;

    // when
    const giveawayEvent = benefits.giveawayEvent(moreThanTwelveThousand);

    // then
    expect(giveawayEvent).toBe(25000);
  });

  test("증정 이벤트 없음", () => {
    // given
    const moreThanTwelveThousand = false;

    // when
    const giveawayEvent = benefits.giveawayEvent(moreThanTwelveThousand);

    // then
    expect(giveawayEvent).toBe(0);
  });

  test("이벤트 배지 산타", () => {
    // given
    benefits.weekendDiscount(10);

    const eventBadge = benefits.eventBadge();

    expect(eventBadge).toBe("산타");
  });

  test("이벤트 배지 트리", () => {
    // given
    benefits.weekendDiscount(5);

    const eventBadge = benefits.eventBadge();

    expect(eventBadge).toBe("트리");
  });

  test("이벤트 배지 별", () => {
    // given
    benefits.weekendDiscount(3);

    const eventBadge = benefits.eventBadge();

    expect(eventBadge).toBe("별");
  });

  test("이벤트 배지 없음", () => {
    // given
    benefits.weekendDiscount(1);

    const eventBadge = benefits.eventBadge();

    expect(eventBadge).toBe("없음");
  });
});
