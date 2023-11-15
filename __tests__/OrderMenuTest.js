import OrderMenu from "../src/model/OrderMenu.js";

describe("OrderMenu 클래스 메소드 테스트", () => {
  const menu = {
    양송이수프: 2,
    티본스테이크: 2,
    해산물파스타: 2,
    레드와인: 1,
    초코케이크: 1,
    아이스크림: 2,
  };

  const onlyBeverageMenu = { 제로콜라: 2, 레드와인: 1 };
  const moreThanTwentyMenu = { 해산물파스타: 19, 레드와인: 2 };

  test("메인메뉴 수량 테스트", () => {
    const orderMenu = new OrderMenu(menu);
    // when
    const mainMenuNumber = orderMenu.mainMenuNumber();

    // then
    expect(mainMenuNumber).toBe(4);
  });
});