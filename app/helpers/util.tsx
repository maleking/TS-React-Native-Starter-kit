import Snackbar, {SnackBarOptions} from 'react-native-snackbar';

const logger = (e: any) => {
  //do something with sentry
  console.log(e);
};
const isStringMatchWithAnyOfRegex = (str: string, RegexArr: string[]) =>
  RegexArr.some(regex => new RegExp(regex).test(str));

const showMessage = ({
  rtl = true,
  duration = Snackbar.LENGTH_LONG,
  ...otherOptions
}: SnackBarOptions) => {
  Snackbar.show({...otherOptions, rtl, duration});
};
export {logger, isStringMatchWithAnyOfRegex, showMessage};
