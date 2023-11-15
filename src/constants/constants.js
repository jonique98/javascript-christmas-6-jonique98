const MENU = {
  애피타이저: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  메인: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  디저트: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  음료: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
};

const MONTH = "12월";

const SIGN = {
  emptyString: "",
  noBenefit: "없음",
  moneyPreffix: "원",
  countPreffix: "개",
  zero: 0,
  minus: "-",
};

const ERROR = {
  date: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  order: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

const OUTPUTMESSAGE = {
  greeting: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  orderMenu: "\n<주문 메뉴>",
  dateEvent: "에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  priceBeforeBenefits: "\n<할인 전 총주문 금액>",
  giveaway: "\n<증정 메뉴>",
  benefitsList: "\n<혜택 내역>",
  benefitsPrice: "\n<총혜택 금액>",
  priceAfterBenefits: "\n<할인 후 예상 결제 금액>",
  eventBadge: "\n<12월 이벤트 배지>",
};

const BENEFITMESSAGE = {
  christmas: "크리스마스 할인 -",
  special: "특별 할인 -",
  giveaway: "증정 이벤트 -",
  weekday: "평일 할인 -",
  weekend: "주말 할인 -",
  champagne: "샴페인 1개",
};

const DISCOUNT = {
  christmasDefaultDiscount: 1000,
  christmasDailyDiscount: 100,
  dateDiscount: 2023,
  specialDiscount: 1000,
  giveaway: 25000,
};

const DAY = {
  firstDay: 1,
  starDay: [3, 10, 17, 24, 25, 31],
  weekend: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  christmas: 25,
};

const BADGE = {
  firstPrice: 20000,
  secondPrice: 10000,
  thirdPrice: 5000,
  first: "산타",
  second: "트리",
  third: "별",
  none: "없음",
};

export {
  DISCOUNT,
  DAY,
  MENU,
  ERROR,
  OUTPUTMESSAGE,
  BENEFITMESSAGE,
  SIGN,
  BADGE,
  MONTH,
};
