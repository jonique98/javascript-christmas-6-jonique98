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
}

export default Benefits;
