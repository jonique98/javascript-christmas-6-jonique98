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
}

export default OutputView;