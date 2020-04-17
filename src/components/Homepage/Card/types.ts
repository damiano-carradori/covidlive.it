type AdditionalContentColor = "warning" | "success" | "error";

export type CardProps = {
  isLoading: boolean;
  emoji: string;
  title: string;
  content: number;
  subContent?: string;
  additionalContent?: string;
  additionalContentColor?: AdditionalContentColor;
};
