import { format as dateFormat, parseISO } from "date-fns";
import { enUS, it } from "date-fns/locale";
import { DateFormatterProps } from "./types";

export const dateFormatter = ({ date, format, locale = "en" }: DateFormatterProps): string => {
  const ISODate = parseISO(date);
  const dateLocale = locale === "it" ? it : enUS;

  return dateFormat(ISODate, format, {
    locale: dateLocale,
  });
};
