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

	orderMenu() {
		return this.#order.menuForPrint();
	}

	dateEventMessage() {
		return this.#date.dateEventMessage();
	}

	benefits() {
		this.#benefits = new Benefits();
		if (!this.#order.canGetBenefit()) return [SIGN.noBenefit];

		const totalBenefits = [];

		totalBenefits.push(this.dailyBenefit());
		totalBenefits.push(this.christmasBenefit());
		totalBenefits.push(this.specialBenefit());
		totalBenefits.push(this.giveawayBenefit());

		if (totalBenefits.every(benefit => benefit === SIGN.emptyString)) return [SIGN.noBenefit];
		return totalBenefits;
	}

	dailyBenefit() {
		let dailyBenefit = 0;

		if (this.#date.dateIsWeekend()) {
			dailyBenefit = this.#benefits.weekendDiscount(this.#order.mainMenuNumber());
			if (dailyBenefit === 0) return SIGN.emptyString;
			return `${BENEFITMESSAGE.weekend}${dailyBenefit.toLocaleString()}${SIGN.moneyPreffix}`;
		}

		dailyBenefit = this.#benefits.weekdayDiscount(this.#order.desertMenuNumber());
		if (dailyBenefit === 0) return SIGN.emptyString;
		return `${BENEFITMESSAGE.weekday}${dailyBenefit.toLocaleString()}${SIGN.moneyPreffix}`;
	}

	christmasBenefit() {
		if (!this.#date.dateIsBeforeChristmas()) return SIGN.emptyString;
		const christmasBenefit = this.#benefits.christmasDiscount(this.#date.christmasLeftDate());
		return `${BENEFITMESSAGE.christmas}${christmasBenefit.toLocaleString()}${SIGN.moneyPreffix}`;
	}

	specialBenefit() {
		const specialBenefit = this.#benefits.specialDiscount(this.#date.dateIsSpecialDay());
		if (specialBenefit === 0) return SIGN.emptyString;
		return `${BENEFITMESSAGE.special}${specialBenefit.toLocaleString()}${SIGN.moneyPreffix}`;
	}

	giveawayBenefit() {
		const giveawayBenefit = this.#benefits.giveawayEvent(this.#order.canGetGiveaway());
		if (giveawayBenefit === 0) return SIGN.emptyString;
		return `${BENEFITMESSAGE.giveaway}${giveawayBenefit.toLocaleString()}${SIGN.moneyPreffix}`;
	}

	giveawayEvent() {
		if (this.#order.canGetGiveaway()) return BENEFITMESSAGE.champagne;
		return SIGN.noBenefit;
	}

	priceBeforeBenefits() {
		return `${this.#order.priceForPrint().toLocaleString()}`;
	}

	totalBenefitsPrice() {
		const totalBenefitsPrice = this.#benefits.totalBenefitForPrint();
		if (totalBenefitsPrice === 0) return `${SIGN.zero}${SIGN.moneyPreffix}`;
		return `${SIGN.minus}${totalBenefitsPrice.toLocaleString()}${SIGN.moneyPreffix}`;
	}

	priceAfterBenefits() {
		return `${(
			this.#order.priceForPrint() - this.#benefits.discountPriceForPrint()
		).toLocaleString()}${SIGN.moneyPreffix}`;
	}

	eventBadge() {
		return this.#benefits.eventBadge();
	}
}

export default Planner;
