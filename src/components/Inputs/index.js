import { TimePicker } from '../TimePicker';

import { InputText } from './Text';
import { InputPassword } from './Password';
import { InputSuggest } from './Suggest';
import { InputNumber } from './Number';
import { InputMask } from './Mask';
export { IInputProps } from './BaseField';
export { IInputMaskProps } from './Mask';
export type { IInputSuggestOption } from './Suggest';

export const Input = {
  Text: InputText,
  Password: InputPassword,
  Number: InputNumber,
  Mask: InputMask,
  Suggest: InputSuggest,
  Time: TimePicker,
};
