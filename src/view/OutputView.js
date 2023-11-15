import { Console } from "@woowacourse/mission-utils";
import { OUTPUTMESSAGE, ERROR } from "../constants/constants.js";

const OutputView = {
  printGreetingMessage() {
    Console.print(OUTPUTMESSAGE.greeting);
  },

  printDateEventMessage(date) {
    Console.print(`${date}${OUTPUTMESSAGE.dateEvent}`);
  },

  printMenu(orderMenu) {
    Console.print(OUTPUTMESSAGE.orderMenu);
    orderMenu.forEach((menu) => Console.print(`${menu}`));
  },
  printPriceBeforeBenefits(orderPrice) {
    Console.print(OUTPUTMESSAGE.priceBeforeBenefits);
    Console.print(orderPrice);
  },

  printGiveaway(giveaway) {
    Console.print(OUTPUTMESSAGE.giveaway);
    Console.print(giveaway);
  },

  printBenefitsList(message) {
    Console.print(OUTPUTMESSAGE.benefitsList);
    message.forEach((benefit) => {
      if (benefit) Console.print(benefit);
    });
  },

  printBenefitsPrice(benefitsPrice) {
    Console.print(OUTPUTMESSAGE.benefitsPrice);
    Console.print(`${benefitsPrice}`);
  },

  printPriceAfterBenefits(priceAfterBenefits) {
    Console.print(OUTPUTMESSAGE.priceAfterBenefits);
    Console.print(`${priceAfterBenefits}`);
  },

  printEventBadge(eventBadge) {
    Console.print(OUTPUTMESSAGE.eventBadge);
    Console.print(eventBadge);
  },

  printDateError() {
    Console.print(ERROR.date);
  },

  printOrderError() {
    Console.print(ERROR.order);
  },
};

export default OutputView;
