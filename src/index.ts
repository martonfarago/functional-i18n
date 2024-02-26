type Interpolator = (...values: string[]) => string;
type Formatter<T> = (v: T) => string;
type NumberFormatters = { [key: string]: Formatter<number> };
type DateFormatters = { [key: string]: Formatter<Date> };
interface LocaleDataMessages {
  [key: string]: string | Interpolator | LocaleDataMessages;
}

export interface LocaleData {
  t: LocaleDataMessages;
  n: NumberFormatters;
  d: DateFormatters;
}

export const createI18n =
  <L extends string, LD extends LocaleData>(data: Record<L, LD>) =>
  (locale: L) =>
    data[locale];
