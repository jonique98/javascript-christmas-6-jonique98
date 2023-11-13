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
}