const MONTH = '12월';

const SIGN = {
	emptyString: '',
	noBenefit: '없음',
	moneyPreffix: '원',
	countPreffix: '개',
	zero: 0,
	minus: '-',
};

const ERROR = {
	date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
	order: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
};

const OUTPUTMESSAGE = {
	greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
	orderMenu: '\n<주문 메뉴>',
	dateEvent: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
	priceBeforeBenefits: '\n<할인 전 총주문 금액>',
	giveaway: '\n<증정 메뉴>',
	benefitsList: '\n<혜택 내역>',
	benefitsPrice: '\n<총혜택 금액>',
	priceAfterBenefits: '\n<할인 후 예상 결제 금액>',
	eventBadge: '\n<12월 이벤트 배지>',
};

const BENEFITMESSAGE = {
	christmas: '크리스마스 할인 -',
	special: '특별 할인 -',
	giveaway: '증정 이벤트 -',
	weekday: '평일 할인 -',
	weekend: '주말 할인 -',
	champagne: '샴페인 1개',
};

const DISCOUNT = {
	christmasDefaultDiscount: 1000,
	christmasDailyDiscount: 100,
	dateDiscount: 2023,
	specialDiscount: 1000,
	giveaway: 25000,
};