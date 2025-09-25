import type { HTMLAttributes } from "react";

export type TParagraphVariants =
  | "display1"
  | "display2"
  | "display3"
  | "title1"
  | "title2"
  | "title3"
  | "subTitle1"
  | "subTitle2"
  | "subTitle3"
  | "body1"
  | "body2"
  | "body3"
  | "caption1"
  | "caption2"
  | "caption3";

export interface ITreeDotsLoading extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
