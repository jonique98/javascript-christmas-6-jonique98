import { MENU, SIGN } from '../constants/constants.js';
import Utils from '../utils/Utils.js';

class OrderMenu {
	#menu;

	constructor(menu) {
		this.#validateMenu(menu);
		this.#menu = menu;
	}

	#validateMenu(menu) {
		const categories = new Set(Object.keys(menu).map(food => Utils.findFoodCategory(food)));

		if (categories.size === 1 && categories.has('음료')) {
			throw new Error('모든 주문 음료');
		}

		const totalItemCount = Object.values(menu).reduce((total, count) => total + count, 0);
		if (totalItemCount > 20) throw new Error('주문 20개 초과');
	}
}