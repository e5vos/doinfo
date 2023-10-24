import { Card, Cards } from "nextra/components";

export const ShowcaseCard = Object.assign(
  // Copy card component and add default props
  Cards.Card.bind(),
  {
    displayName: "ShowcaseCard",
    defaultProps: {
      image: true,
      arrow: true,
      target: "_blank",
    },
  }
);
