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
    "타파스-1,티본스테이크-2,해산물파스타-2,초코케이크-1,레드와인-1";
  const noBenefitMenu = "양송이수프 1,제로콜라 1";
  const noMainMenu = "양송이수프-2,타파스-2,초코케이크-3,레드와인-5";
  const noDesertMenu =
    "해산물파스타-2,티본스테이크-2,크리스마스파스타-2,레드와인-1";

  test("주말 할인 적용 테스트", () => {
    const result = [
      "주말 할인 -8,092원",
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
});
