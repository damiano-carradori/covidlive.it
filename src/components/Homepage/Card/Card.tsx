import React from "react";
import numeral from "numeral";
import Skeleton from "@Components/Skeleton";
import { CardBox, CircularBox, Text, Title5 } from "@Components/Layout/elements";
import { CardProps } from "./types";

const Card = ({
  isLoading = false,
  emoji = "",
  title = "",
  content = 0,
  additionalContent,
  subContent,
  additionalContentColor = "error",
}: CardProps): React.ReactElement => {
  return (
    <CardBox px="large" py="xlarge" boxShadow="small" mt={["xlarge", "xlarge", "xlarge", "large"]}>
      {emoji && <CircularBox role="img">{emoji}</CircularBox>}
      <Title5 fontSize={5} color="neutral200" mb="base" fontWeight="bold">
        {isLoading ? <Skeleton /> : title}
      </Title5>
      <Text color="neutral300" position="relative" my="mid" fontSize={7} fontWeight="bold" textAlign="right">
        {isLoading ? <Skeleton /> : numeral(content).format("0,0")}
        {!isLoading && (
          <Text position="absolute" top="-1em" right={0} fontSize={2} color={additionalContentColor}>
            {additionalContent}
          </Text>
        )}
      </Text>
      {subContent && !isLoading && (
        <Text fontSize={1} color="neutral300" fontWeight={700} textAlign="right">
          {subContent}
        </Text>
      )}
    </CardBox>
  );
};

export default Card;
