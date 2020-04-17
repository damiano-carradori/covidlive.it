import React from "react";

type CustomLinkProps = {
  isInternal?: boolean;
  to?: string;
  onClick?: Function;
  fontSize?: number;
  textDecoration?: string;
  textTransform?: string;
  children?: React.ReactNode;
};

import { StyledAnchor, StyledLink } from "@Components/Layout/elements";

function CustomLink({
  isInternal = false,
  to = "#",
  onClick,
  fontSize,
  textDecoration,
  textTransform,
  children,
}: CustomLinkProps): React.ReactElement {
  return isInternal ? (
    <StyledLink
      to={to}
      onClick={onClick}
      fontSize={fontSize}
      textDecoration={textDecoration}
      textTransform={textTransform}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledAnchor
      href={to}
      onClick={onClick}
      fontSize={fontSize}
      textDecoration={textDecoration}
      textTransform={textTransform}
    >
      {children}
    </StyledAnchor>
  );
}

export default CustomLink;
