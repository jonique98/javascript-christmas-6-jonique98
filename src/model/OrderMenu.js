import { MENU, SIGN } from '../constants/constants.js';
import Utils from '../utils/Utils.js';

class OrderMenu {
	#menu;

	constructor(menu) {
		this.#validateMenu(menu);
		this.#menu = menu;
	}
}