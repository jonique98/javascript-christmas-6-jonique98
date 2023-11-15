import { MENU, SIGN } from "../constants/constants.js";
import Utils from "../utils/Utils.js";

class OrderMenu {
  #menu;

  constructor(menu) {
    this.#validateMenu(menu);
    this.#menu = menu;
  }

  mainMenuNumber() {
    let mainMenuCounter = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const food in this.#menu) {
      if (MENU.메인.hasOwnProperty(food)) mainMenuCounter += this.#menu[food];
    }

    return mainMenuCounter;
  }

  desertMenuNumber() {
    let desertMenuCounter = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const food in this.#menu) {
      if (MENU.디저트.hasOwnProperty(food))
        desertMenuCounter += this.#menu[food];
    }

    return desertMenuCounter;
  }

  menuForPrint() {
    const result = [];

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const food in this.#menu) {
      result.push(`${food} ${this.#menu[food]}${SIGN.countPreffix}`);
    }
    return result;
  }

  #validateMenu(menu) {
    const categories = new Set(
      Object.keys(menu).map((food) => Utils.findFoodCategory(food)),
    );

    if (categories.size === 1 && categories.has("음료")) {
      throw new Error("모든 주문 음료");
    }

    const totalItemCount = Object.values(menu).reduce(
      (total, count) => total + count,
      0,
    );
    if (totalItemCount > 20) throw new Error("주문 20개 초과");
  }
}

export default OrderMenu;
