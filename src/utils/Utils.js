import { MENU } from '../constants/constants.js';

const Utils = {
  menuParser(orderString) {
    const items = orderString.split(',');
    const parsedMenu = {};

    items.forEach((item) => {
      const { food, parsedNumber } = this.validateMenuItem(parsedMenu, item);
      parsedMenu[food] = parsedNumber;
    });

    return parsedMenu;
  },

  validateMenuItem(parsedMenu, item) {
    const [foodString, number] = item.split('-');
    const food = foodString.trimStart();
    const foodCategory = this.findFoodCategory(food);

    if (!foodCategory || !number) throw new Error();

    if (parsedMenu.hasOwnProperty(food)) throw new Error();

    const parsedNumber = Number(number);
    if (parsedNumber <= 0 || Number.isNaN(parsedNumber)) throw new Error();

    return { food, parsedNumber };
  },

  findFoodCategory(food) {
    // eslint-disable-next-line no-restricted-syntax
    for (const category in MENU) {
      if (MENU[category].hasOwnProperty(food)) {
        return category;
      }
    }
    return null;
  },
};

export default Utils;
