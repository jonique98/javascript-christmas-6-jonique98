import OrderPrice from "../src/model/OrderPrice.js";

describe("OrderPrice 클래스 메소드 테스트", () => {
  const menu1 = {
    양송이수프: 2,
    티본스테이크: 2,
    해산물파스타: 2,
    레드와인: 1,
    초코케이크: 1,
    아이스크림: 2,
  };

  const menu2 = {
    양송이수프: 1,
    제로콜라: 1,
  };

  test("베네핏 적용 여부 메소드 테스트", () => {
    // given

    const getBenefitObject = new OrderPrice(menu1);
    const noBenefitObject = new OrderPrice(menu2);

    // when
    const getBenefit = getBenefitObject.canGetBenefit();
    const noBenefit = noBenefitObject.canGetBenefit();

    // then
    expect(getBenefit).toBe(true);
    expect(noBenefit).toBe(false);
  });

  test("경품 이벤트 메소드 테스트", () => {
    // given
    const getGiveaway = new OrderPrice(menu1);
    const noGiveaway = new OrderPrice(menu2);

    // when
    const getGiveawayEvent = getGiveaway.canGetGiveaway();
    const noGiveawayEvent = noGiveaway.canGetGiveaway();

    // then
    expect(getGiveawayEvent).toBe(true);
    expect(noGiveawayEvent).toBe(false);
  });

  test("주문 금액 출력 테스트", () => {
    // given
    const orderPrice = new OrderPrice(menu1);

    // when
    const priceForPrint = orderPrice.priceForPrint();

    // then
    expect(priceForPrint).toBe(277000);
  });
});
