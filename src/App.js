import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Planner from './controller/Planner.js';

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
}

export default App;
