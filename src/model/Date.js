import { DAY, MONTH } from '../constants/constants.js';

class Date {
	#date;

	constructor(date) {
		this.#validate(date);
		this.#date = Number(date);
	}
}

export default Date;
