import Date from '../model/Date.js';
import Order from '../model/Order.js';
import Benefits from '../model/Benefits.js';
import { BENEFITMESSAGE, SIGN } from '../constants/constants.js';

class Planner {
	#date;
	#order;
	#benefits;

	initDate(date) {
		this.#date = new Date(date);
	}

	takeOrder(orderString) {
		this.#order = new Order(orderString);
	}
}