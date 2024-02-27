import { LocaleData } from "./localeData";
import {
  intlNumberFormatter,
  intlDateTimeFormatter,
} from "../../src/formatters/intl";

const numberFormatter = intlNumberFormatter("en-US");
const dateFormatter = intlDateTimeFormatter("en-US");

export const en_US: LocaleData = {
  t: {
    hi: "Hi there!",
    welcome: (name) => `Welcome ${name}!`,
    valueOfFieldIsTooShort: (fieldName, minLength) =>
      `The value of "${fieldName}" must be longer than ${minLength}`,
    youHaveApples: (count, name) =>
      `${name}, you have ${count} ${count === 1 ? "apple" : "apples"}`,
  },
  n: {
    integer: numberFormatter({ style: "decimal" }),
    percent: numberFormatter({ style: "percent" }),
  },
  d: {
    date: dateFormatter({
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    time: dateFormatter({
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
};
