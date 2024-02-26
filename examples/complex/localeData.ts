import { LocaleData as BaseLocaleData } from "../../src";

export interface LocaleData extends BaseLocaleData {
  t: {
    hi: string;
    welcome: (name: string) => string;
    valueOfFieldIsTooShort: (fieldName: string, minLength: string) => string;
  };
  n: {
    integer: (n: number) => string;
    percent: (n: number) => string;
  };
  d: {
    date: (d: Date) => string;
    time: (d: Date) => string;
  };
}

export { de_DE } from "./de-DE";
export { en_US } from "./en-US";
