import { type ButtonHTMLAttributes, type PropsWithChildren, type Ref } from "react";

import { Loading } from "./";
import { cn } from "@/libs";
import type { GeneralTypes } from "@/types";
import { GENERAL_CONSTANTS } from "@/constants";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  isLoading?: boolean;
  className?: string;
  loadingComponentProps?: GeneralTypes.ITreeDotsLoading;
  variant?: GeneralTypes.TParagraphVariants;
  ref?: Ref<HTMLButtonElement>;
}

export function Button({
  children,
  isLoading,
  className,
  loadingComponentProps,
  variant = "body3",
  ref,
  ...buttonProps
}: Props) {
  return (
    <button
      ref={ref}
      disabled={buttonProps.disabled}
      className={cn(
        "bg-black text-white px-5 rounded-sm h-10 flex items-center justify-center text-sm cursor-pointer",
        GENERAL_CONSTANTS.TYPOGRAPHY_STYLES[variant],
        {
          "bg-gray-100 text-gray-400 cursor-not-allowed":
            isLoading || buttonProps.disabled,
        },
        className
      )}
      {...buttonProps}
    >
      {isLoading ? <Loading.TreeDots {...loadingComponentProps} /> : children}
    </button>
  );
}
