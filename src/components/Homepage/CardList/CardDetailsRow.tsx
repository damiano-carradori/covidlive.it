import React from "react";
import numeral from "numeral";
import { useIntl } from "gatsby-plugin-intl";
import { Box } from "@Components/Layout/elements";
import { CardDetailsRowProps } from "./types";

function CardDetailsRow({ title, number }: CardDetailsRowProps): React.ReactElement {
  const { formatMessage } = useIntl();

  return (
    <Box display="flex" justifyContent="space-between" py="base" color="neutral300">
      <Box fontSize={1} fontWeight="bold">
        {formatMessage({
          id: title,
        })}
      </Box>
      <Box fontSize={1} fontWeight="bold">
        {numeral(number).format("0,0")}
      </Box>
    </Box>
  );
}

export default CardDetailsRow;
