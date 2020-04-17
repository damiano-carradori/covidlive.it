import React from "react";
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import CustomLink from "@Components/CustomLink";

function LanguageSwitcher(): React.ReactElement {
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }: { language: string }): React.ReactElement => {
        const languageFlag = currentLocale === "en" ? "🇮🇹" : "🇺🇸";
        const otherLanguage = currentLocale === "en" ? "it" : "en";

        return (
          <CustomLink fontSize={3} textDecoration="none" onClick={(): void => changeLocale(otherLanguage)}>
            <span role="img">{languageFlag}</span>
          </CustomLink>
        );
      }}
    </IntlContextConsumer>
  );
}

export default LanguageSwitcher;
