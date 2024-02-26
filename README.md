# functional-i18n

## Basic usage

```ts
const i18n = createI18n<
  "en-US" | "de-DE",
  {
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
>({
  "en-US": {
    t: {
      hi: "Hi there!",
      welcome: (name) => `Welcome ${name}!`,
      valueOfFieldIsTooShort: (fieldName, minLength) =>
        `The value of "${fieldName}" must be longer than ${minLength}`,
    },
    n: {
      integer: (n) => Math.round(n).toString(),
      percent: (n) => `${Math.round(n * 100).toString()}%`,
    },
    d: {
      date: (d) => d.toLocaleDateString(),
      time: (d) => d.toLocaleTimeString(),
    },
  },
  "de-DE": {
    t: {
      hi: "Hallo!",
      welcome: (name) => `Wilkommen ${name}!`,
      valueOfFieldIsTooShort: (fieldName, minLength) =>
        `Der Wert von "${fieldName}" muss länger als ${minLength} sein`,
    },
    n: {
      integer: (n) => n.toString(),
      percent: (n) => `${Math.round(n * 100).toString()}%`,
    },
    d: {
      date: (d) => d.toLocaleDateString(),
      time: (d) => d.toLocaleTimeString(),
    },
  },
});

const { t } = i18n("en-US");

console.log(t.hi);
console.log(t.welcome("Dave"));
console.log(t.valueOfFieldIsTooShort("password", "8"));
```
