import OrderMenu from './OrderMenu.js';
import OrderPrice from './OrderPrice.js';
import Utils from '../utils/Utils.js';

class Order {
	#orderMenu;
	#orderPrice;

	constructor(orderString) {
		const menu = Utils.menuParser(orderString);

		this.#orderMenu = new OrderMenu(menu);
		this.#orderPrice = new OrderPrice(menu);
	}

	mainMenuNumber() {
		return this.#orderMenu.mainMenuNumber();
	}

	desertMenuNumber() {
		return this.#orderMenu.desertMenuNumber();
	}

	canGetBenefit() {
		return this.#orderPrice.canGetBenefit();
	}

	canGetGiveaway() {
		return this.#orderPrice.canGetGiveaway();
	}

	menuForPrint() {
		return this.#orderMenu.menuForPrint();
	}

	priceForPrint() {
		return this.#orderPrice.priceForPrint();
	}
}