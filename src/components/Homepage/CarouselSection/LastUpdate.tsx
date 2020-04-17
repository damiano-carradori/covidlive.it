import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Text } from "@Components/Layout/elements";
import { dateFormatter } from "@Components/Homepage/utils";
import { LastUpdateProps } from "./types";

function LastUpdate({ date }: LastUpdateProps): React.ReactElement {
  const { formatMessage, locale } = useIntl();

  const dateFormat = locale === "it" ? "dd/LL/yyyy – H:mm" : "MMM do, y – h:mm aaaa";

  const formattedDate = dateFormatter({ date, format: dateFormat, locale });

  return (
    <Text py="base" fontSize={1} color="neutral200" textAlign={["center", "right"]} fontWeight={700}>
      {formatMessage(
        { id: "pages.homepage.lastUpdateLabel" },
        {
          datetime: formattedDate,
          link: (
            <a href="http://www.protezionecivile.gov.it/home" rel="noopener noreferrer" target="_blank">
              {formatMessage({ id: "pages.homepage.lastUpdateCtaLabel" })}
            </a>
          ),
        }
      )}
    </Text>
  );
}

export default LastUpdate;
