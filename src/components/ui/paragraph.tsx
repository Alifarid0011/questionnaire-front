import {
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
  type Ref,
} from "react";

import type { GeneralTypes } from "@/types";
import { GENERAL_CONSTANTS } from "@/constants";
import { cn } from "@/libs";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  className?: string;
  variant?: GeneralTypes.TParagraphVariants;
  component?: GeneralTypes.TParagraphComponents;
  ref?: Ref<HTMLElement>;
}

export const Paragraph: FC<Props> = ({
  children,
  className,
  variant = "subTitle2",
  component: Component = "p",
  ref,
  ...props
}) => {
  return (
    <Component
      ref={ref as Ref<HTMLHeadingElement> | undefined}
      className={cn(GENERAL_CONSTANTS.TYPOGRAPHY_STYLES[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
