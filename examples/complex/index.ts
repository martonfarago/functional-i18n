import { createI18n } from "../../src";
import { LocaleData, en_US, de_DE } from "./localeData";

const i18n = createI18n<"en-US" | "de-DE", LocaleData>({
  "en-US": en_US,
  "de-DE": de_DE,
});

const { t, n, d } = i18n("en-US");

console.log(t.hi);
console.log(t.welcome("Dave"));
console.log(t.valueOfFieldIsTooShort("password", "8"));
console.log(n.integer(10.2));
console.log(n.percent(0.256));
console.log(d.time(new Date()));
