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

	christmasDiscount(dateBeforeChristmas) {
		const christmasDiscount =
			DISCOUNT.christmasDefaultDiscount + DISCOUNT.christmasDailyDiscount * dateBeforeChristmas;
		this.#totalBenefit += christmasDiscount;
		this.#discountPrice += christmasDiscount;
		return christmasDiscount;
	}

	specialDiscount(specialDay) {
		if (specialDay) {
			this.#totalBenefit += DISCOUNT.specialDiscount;
			this.#discountPrice += DISCOUNT.specialDiscount;
			return DISCOUNT.specialDiscount;
		}
		return 0;
	}

	giveawayEvent(moreThanTwelveThousand) {
		if (moreThanTwelveThousand) {
			this.#totalBenefit += DISCOUNT.giveaway;
			return DISCOUNT.giveaway;
		}
		return 0;
	}

	eventBadge() {
		if (this.#totalBenefit >= BADGE.firstPrice) return BADGE.first;
		if (this.#totalBenefit >= BADGE.secondPrice) return BADGE.second;
		if (this.#totalBenefit >= BADGE.thirdPrice) return BADGE.third;
		return BADGE.none;
	}

	totalBenefitForPrint() {
		return this.#totalBenefit;
	}

	discountPriceForPrint() {
		return this.#discountPrice;
	}
}

export default Benefits;
