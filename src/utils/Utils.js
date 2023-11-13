import { MENU } from '../constants/constants.js';

const Utils = {
	menuParser(orderString) {
		const items = orderString.split(',');
		const parsedMenu = {};

		items.forEach(item => {
			const [food, number] = item.split('-');
			const foodCategory = this.findFoodCategory(food);

			if (!foodCategory || !number) throw new Error();

			// eslint-disable-next-line no-prototype-builtins
			if (parsedMenu.hasOwnProperty(food)) throw new Error();

			parsedMenu[food] = Number(number);
			if (parsedMenu[food] <= 0 || Number.isNaN(parsedMenu[food])) throw new Error();
		});
		return parsedMenu;
	},

	findFoodCategory(food) {
		// eslint-disable-next-line no-restricted-syntax
		for (const category in MENU) {
			// eslint-disable-next-line no-prototype-builtins
			if (MENU[category].hasOwnProperty(food)) {
				return category;
			}
		}
		return null;
	},
};

export default Utils;
