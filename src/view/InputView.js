import { Console } from '@woowacourse/mission-utils';
import { INPUTMESSAGE } from '../constants/constants.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUTMESSAGE.date);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUTMESSAGE.order);
    return input;
  },
};
export default InputView;
