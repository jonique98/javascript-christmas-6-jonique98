import { MENU } from '../constants/constants.js';

class OrderPrice {
	#price = 0;

	constructor(orderMenu) {
		this.#price = this.calculatePrice(orderMenu);
	}

	calculatePrice(orderMenuArray) {
		let price = 0;

		// eslint-disable-next-line no-restricted-syntax
		for (const food in orderMenuArray) {
			// eslint-disable-next-line no-prototype-builtins
			if (orderMenuArray.hasOwnProperty(food)) {
				price += this.calculateFoodPrice(food, orderMenuArray[food]);
			}
		}

		return price;
	}

	calculateFoodPrice(food, count) {
		// eslint-disable-next-line no-restricted-syntax
		for (const category in MENU) {
			// eslint-disable-next-line no-prototype-builtins
			if (MENU.hasOwnProperty(category) && MENU[category].hasOwnProperty(food)) {
				return MENU[category][food] * count;
			}
		}

		return 0; // 메뉴를 찾지 못한 경우 가격은 0으로 처리
	}
}

export default OrderPrice;
