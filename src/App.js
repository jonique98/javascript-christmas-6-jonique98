import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import Planner from "./Planner/Planner.js";

class App {
  async run() {
    const planner = new Planner();
    await this.readDate(planner);
    await this.readOrder(planner);
    this.printplanner(planner);
  }

  async readDate(planner) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const date = await InputView.readDate();
        planner.initDate(date);
        break;
      } catch (error) {
        OutputView.printDateError();
      }
    }
  }

  async readOrder(planner) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const orderString = await InputView.readOrder();
        planner.takeOrder(orderString);
        break;
      } catch (error) {
        OutputView.printOrderError();
      }
    }
  }

  printplanner(planner) {
    OutputView.printDateEventMessage(planner.dateEventMessage());
    OutputView.printMenu(planner.orderMenu());
    OutputView.printPriceBeforeBenefits(planner.priceBeforeBenefits());
    OutputView.printGiveaway(planner.giveawayEvent());
    OutputView.printBenefitsList(planner.benefits());
    OutputView.printBenefitsPrice(planner.totalBenefitsPrice());
    OutputView.printPriceAfterBenefits(planner.priceAfterBenefits());
    OutputView.printEventBadge(planner.eventBadge());
  }
}

export default App;
