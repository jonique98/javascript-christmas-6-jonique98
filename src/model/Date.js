import { DAY, MONTH } from '../constants/constants.js';

class Date {
	#date;

	constructor(date) {
		this.#validate(date);
		this.#date = Number(date);
	}

	#validate(date) {
		const dateToNumber = Number(date);

		if (Number.isNaN(dateToNumber)) {
			throw new Error();
		}

		if (dateToNumber < 1 || dateToNumber > 31) {
			throw new Error();
		}
	}
}

export default Date;