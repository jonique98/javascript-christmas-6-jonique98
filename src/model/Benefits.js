import { DISCOUNT, BADGE } from '../constants/constants.js';

class Benefits {
	#totalBenefit = 0;
	#discountPrice = 0;

	weekendDiscount(mainOrder) {
		const weekendDiscount = DISCOUNT.dateDiscount * mainOrder;
		this.#totalBenefit += weekendDiscount;
		this.#discountPrice += weekendDiscount;
		return weekendDiscount;
	}

	weekdayDiscount(desertOrder) {
		const weekdayDiscount = DISCOUNT.dateDiscount * desertOrder;
		this.#totalBenefit += weekdayDiscount;
		this.#discountPrice += weekdayDiscount;
		return weekdayDiscount;
	}
}

export default Benefits;
