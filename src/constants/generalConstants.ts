import type { GeneralTypes } from "@/types";

export const TYPOGRAPHY_STYLES: Record<
  GeneralTypes.TParagraphVariants,
  string
> = {
  display1: "font-[400] text-[54px] leading-[72px]",
  display2: "font-[400] text-5xl leading-16",
  display3: "font-[400] text-[40px] leading-[52px]",
  title1: "font-[400] text-xl leading-[26px]",
  title2: "font-[300] text-xl leading-[26px]",
  title3: "font-[200] text-xl leading-[26px]",
  subTitle1: "font-[400] text-base leading-5",
  subTitle2: "font-[300] text-base leading-5",
  subTitle3: "font-[200] text-base leading-5",
  body1: "font-[400] text-sm leading-[18px] ",
  body2: "font-[300] text-sm leading-[18px]",
  body3: "font-[200] text-sm leading-[18px]",
  caption1: "font-[400] text-xs leading-4",
  caption2: "font-[300] text-xs leading-4",
  caption3: "font-[200] text-xs leading-4",
};
