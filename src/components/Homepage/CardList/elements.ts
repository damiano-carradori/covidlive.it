import React from "react";
import styled from "styled-components";
import { AccordionItemButton } from "react-accessible-accordion";
// @ts-ignore
import { ReactComponent as ChevronSvg } from "@Assets/images/icons/chevron.svg";
import { space, SpaceProps, system } from "styled-system";

interface AccordionItemButtonProps extends React.ComponentProps<typeof AccordionItemButton>, SpaceProps {}

export const StyledAccordionItemButton = styled(AccordionItemButton)<AccordionItemButtonProps>(
  {
    transition: "background-color 300ms ease",
    backgroundColor: "#fff",
    cursor: "pointer",
    display: "flex",
    outline: 0,
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
  space
);

export const Chevron = styled(ChevronSvg)(
  {
    width: 16,
    fill: "currentColor",
  },
  system({
    transform: true,
  })
);
