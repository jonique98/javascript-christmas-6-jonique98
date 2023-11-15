import Planner from "../src/Planner/Planner";

describe("Planner 클래스 메소드 테스트", () => {
  let planner;

  beforeEach(() => {
    planner = new Planner();
  });

  const weekend = "1";
  const weekdayAfterChristmas = "26";

  const weekday = "12";
  const weekendAfterChristmas = "29";

  const specialDayBeforeChristmas = "25";
  const specialDayAfterChristmas = "31";

  const benefitMenu =
    "타파스-3,티본스테이크-3,해산물파스타-3,초코케이크-3,아이스크림-3,레드와인-3";
  const noBenefitMenu = "양송이수프 1,제로콜라 1";
  const noMainMenu = "타파스-3,초코케이크-3,아이스크림-3,레드와인-3";
  const noDesertMenu = "타파스-3,티본스테이크-3,해산물파스타-3,레드와인-3";

  test("주말 할인 적용 테스트", () => {
    const result = [
      "주말 할인 -12,138원",
      "크리스마스 할인 -1,000원",
      "",
      "증정 이벤트 -25,000원",
    ];

    planner.initDate(weekend);
    planner.takeOrder(benefitMenu);
    expect(planner.benefits()).toEqual(result);
  });

  test("메인 메뉴가 없을 때 주말 할인 미적용 테스트", () => {
    const result = [
      "",
      "크리스마스 할인 -1,000원",
      "",
      "증정 이벤트 -25,000원",
    ];

    planner.initDate(weekend);
    planner.takeOrder(noMainMenu);
    expect(planner.benefits()).toEqual(result);
  });

  test("주중 할인 테스트", () => {
    const result = [
      "평일 할인 -12,138원",
      "크리스마스 할인 -2,100원",
      "",
      "증정 이벤트 -25,000원",
    ];

    planner.initDate(weekday);
    planner.takeOrder(benefitMenu);
    expect(planner.benefits()).toEqual(result);
  });

  test("디저트 메뉴가 없을 때 주중 할인 미적용 테스트", () => {
    const result = [
      "",
      "크리스마스 할인 -2,100원",
      "",
      "증정 이벤트 -25,000원",
    ];

    planner.initDate(weekday);
    planner.takeOrder(noDesertMenu);
    expect(planner.benefits()).toEqual(result);
  });
});
