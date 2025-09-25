import type { HTMLAttributes } from "react";

type TInputTypes = "text" | "date" | "number" | "select" | "password";

export interface IInputs<T> {
  name: T;
  label: string;
  placeholder?: string;
  type: TInputTypes;
  isRequired: boolean;
  hint?: string;
}

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

export type TParagraphComponents =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

// auth
export type TLoginFormInputsName = "national_code" | "password" ;

export type TLoginFormInitialValues = Record<TLoginFormInputsName, string>;
