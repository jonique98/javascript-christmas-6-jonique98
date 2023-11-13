import { Console } from "@woowacourse/mission-utils"
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
        orderMenu.forEach(menu => Console.print(`${menu}`));
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
        message.forEach(message => {
            if(message)
                Console.print(message);
        }
    )},
}

export default OutputView;