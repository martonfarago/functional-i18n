import { LocaleData } from "./localeData";
import {
  intlNumberFormatter,
  intlDateTimeFormatter,
} from "../../src/formatters/intl";

const numberFormatter = intlNumberFormatter("de-DE");
const dateFormatter = intlDateTimeFormatter("de-DE");

export const de_DE: LocaleData = {
  t: {
    hi: "Hallo!",
    welcome: (name) => `Wilkommen ${name}!`,
    valueOfFieldIsTooShort: (fieldName, minLength) =>
      `Der Wert von "${fieldName}" muss länger als ${minLength} sein`,
    youHaveApples: (count, name) =>
      `${name}, du hast ${count} ${count === 1 ? "Apfel" : "Äpfel"}`,
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
      hour12: false,
    }),
    time: dateFormatter({
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }),
  },
};
