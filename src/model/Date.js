import { DAY, MONTH } from '../constants/constants.js';

class Date {
	#date;

	constructor(date) {
		this.#validate(date);
		this.#date = Number(date);
	}

	dateIsWeekend() {
		return DAY.weekend.includes(this.#date);
	}

	dateIsSpecialDay() {
		return DAY.starDay.includes(this.#date);
	}

	dateIsBeforeChristmas() {
		return this.#date <= DAY.christmas;
	}

	christmasLeftDate() {
		if (this.#date > DAY.christmas) return 0;
		return this.#date - DAY.firstDay;
	}

	dateEventMessage() {
		return `${MONTH} ${this.#date}`;
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
