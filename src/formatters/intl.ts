export const intlNumberFormatter =
  (locale: string) =>
  (formatOptions: Intl.NumberFormatOptions) =>
  (v: number) => {
    try {
      return new Intl.NumberFormat(locale, formatOptions).format(v);
    } catch (e) {
      return v.toString();
    }
  };

export const intlDateTimeFormatter =
  (locale: string) =>
  (formatOptions: Intl.DateTimeFormatOptions) =>
  (v: Date) => {
    try {
      return new Intl.DateTimeFormat(locale, formatOptions).format(v);
    } catch (e) {
      return v.toString();
    }
  };
