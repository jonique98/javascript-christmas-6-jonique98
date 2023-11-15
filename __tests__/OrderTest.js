import Order from "../src/model/Order";

describe("Order 클래스 메소드 테스트", () => {
  const invalidInput1 = "해산물파스타2";
  const invalidInput2 = "해산물파스타 -2";
  const invalidInput3 = "해산물파스타-2 레드와인-2";

  const invalidMenu = "평양냉면-1";
  const onlyBeverageMenu = "제로콜라-2,레드와인-1";
  const moreThanTwentyMenu = "해산물파스타-19,레드와인-2";

  const noBenefitMenu = "양송이수프-1";
  const noGiveawayMenu = "양송이수프-1,아이스크림-1,제로콜라-1";

  const menu =
    "양송이수프-2,티본스테이크-2,해산물파스타-1,레드와인-1,초코케이크-1,아이스크림-2";

  test("유효하지 않은 형식 validate 테스트", () => {
    // when
    const validate1 = () => new Order(invalidInput1);
    const validate2 = () => new Order(invalidInput2);
    const validate3 = () => new Order(invalidInput3);

    // then
    expect(validate1).toThrow();
    expect(validate2).toThrow();
    expect(validate3).toThrow();
  });

  test("메뉴판에 없는 메뉴 validate 테스트", () => {
    // when
    const validate = () => new Order(invalidMenu);

    // then
    expect(validate).toThrow();
  });

  test("음료만 주문한 경우 validate 테스트", () => {
    // when
    const validate = () => new Order(onlyBeverageMenu);

    // then
    expect(validate).toThrow();
  });

  test("20개 이상 주문한 경우 validate 테스트", () => {
    // when
    const validate = () => new Order(moreThanTwentyMenu);

    // then
    expect(validate).toThrow();
  });

  test("혜택이 없는 경우", () => {
    const order = new Order(noBenefitMenu);

    const noBenefit = order.canGetBenefit();
    expect(noBenefit).toBe(false);
  });

  test("증정품이 없는 경우", () => {
    const order = new Order(noGiveawayMenu);

    const noGiveaway = order.canGetGiveaway();
    expect(noGiveaway).toBe(false);
  });

  test("모든 헤택을 받을 수 있는 메뉴에 대해서 메소드 테스트", () => {
    // given
    const order = new Order(menu);

    // when
    const mainMenuNumber = order.mainMenuNumber();
    const desertMenuNumber = order.desertMenuNumber();
    const canGetBenefit = order.canGetBenefit();
    const canGetGiveaway = order.canGetGiveaway();

    // then
    expect(mainMenuNumber).toBe(3);
    expect(desertMenuNumber).toBe(3);
    expect(canGetBenefit).toBe(true);
    expect(canGetGiveaway).toBe(true);
  });
});
