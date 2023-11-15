import { DAY, MONTH, DATE } from '../constants/constants.js';

class Date {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = Number(date);
  }

  isWeekend() {
    return DAY.weekend.includes(this.#date);
  }

  isSpecialDay() {
    return DAY.starDay.includes(this.#date);
  }

  isBeforeChristmas() {
    return this.#date <= DAY.christmas;
  }

  christmasLeftDate() {
    if (this.#date > DAY.christmas) return 0;
    return this.#date - DAY.firstDay;
  }

  dateEventMessage() {
    return `${MONTH} ${this.#date}${DATE}`;
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
