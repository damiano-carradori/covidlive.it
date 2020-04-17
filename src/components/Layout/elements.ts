import React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  ColorProps,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  border,
  BorderProps,
  background,
  typography,
  TypographyProps,
  grid,
  GridProps,
  shadow,
  ShadowProps,
  compose,
  variant,
  system,
} from "styled-system";
import { Link } from "gatsby";

type BoxProps = LayoutProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  BorderProps &
  TypographyProps &
  ShadowProps &
  GridProps &
  React.HTMLAttributes<HTMLElement>;

interface TextProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    ColorProps,
    BorderProps,
    TypographyProps,
    GridProps,
    PositionProps,
    ShadowProps {
  textTransform?: string;
}

type Title2Props = SpaceProps;

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant: string;
}

export const Box: React.ComponentType<BoxProps> = styled.div<BoxProps>(
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position)
);

export const Span: React.ComponentType<BoxProps> = styled.span<BoxProps>(compose(layout, space, color, typography));

export const Title1: React.ComponentType<Title2Props> = styled.h1<Title2Props>(
  { fontSize: 36, fontWeight: 700, color: "#b9bfca" },
  space
);

export const Title2: React.ComponentType<Title2Props> = styled.h2<Title2Props>(
  { fontSize: 36, fontWeight: 700, color: "#b9bfca" },
  space
);

export const Title3: React.ComponentType<Title2Props> = styled.h3<Title2Props>(
  { fontSize: 32, fontWeight: 700, color: "#b9bfca" },
  space
);

export const Title5: React.ComponentType<BoxProps> = styled.h5<BoxProps>(
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position)
);

export const Text: React.ComponentType<TextProps> = styled.div<TextProps>(
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position),
  system({
    textTransform: true,
  })
);

export const CardBox: React.ComponentType<BoxProps> = styled.div<BoxProps>(
  props => ({
    backgroundColor: "white",
    position: "relative",
    border: "1px solid",
    borderColor: props.theme.colors.neutral100,
    borderRadius: 16,
  }),
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position)
);

export const CircularBox = styled.div<React.HTMLAttributes<HTMLElement>>(props => ({
  display: "flex",
  backgroundColor: "white",
  position: "absolute",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  width: 64,
  height: 64,
  top: -32,
  left: 32,
  fontSize: props.theme.fontSizes[4],
  boxShadow: props.theme.shadows.large,
}));

export const Button: React.ComponentType<ButtonProps> = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    borderRadius: 8,
    textTransform: "uppercase",
    border: 0,
    fontWeight: "bold",
    transition: "background-color 0.2s ease",
    fontSize: 16,
  },
  variant({
    variants: {
      primary: {
        padding: "base",
        color: "white",
        backgroundColor: "primary100",
        boxShadow: "largePrimary",
        "&:hover": {
          backgroundColor: "primary100lighten4",
        },
      },
    },
  })
);

export const StyledLink = styled(Link)(
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position),
  system({
    textDecoration: true,
    textTransform: true,
  })
);

export const StyledAnchor: React.ComponentType<BoxProps> = styled.a<BoxProps>(
  compose(layout, space, flexbox, grid, color, border, typography, shadow, position),
  system({
    textDecoration: true,
    textTransform: true,
  })
);
