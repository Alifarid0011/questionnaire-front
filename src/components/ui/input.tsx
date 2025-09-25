import type { FC, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/libs";
import { Paragraph } from "@/components/ui/paragraph";
import { GENERAL_CONSTANTS } from "@/constants";
import type { GeneralTypes } from "@/types";
import { Icons } from ".";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelProps?: HTMLAttributes<HTMLParagraphElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  className?: string;
  errorMessage?: string;
  labelVariant?: GeneralTypes.TParagraphVariants;
  isRequired?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputParent?: HTMLAttributes<HTMLDivElement>;
  hint?: string;
}

export const Input: FC<Props> = ({
  label,
  labelProps,
  containerProps = {},
  className,
  errorMessage,
  labelVariant = "body3",
  isRequired,
  startAdornment,
  endAdornment,
  inputParent,
  hint,
  ...inputProps
}) => {
  return (
    <div
      {...containerProps}
      className={cn("flex flex-col gap-[8px]", containerProps?.className)}
    >
      {label && (
        <Paragraph {...labelProps} variant={labelVariant}>
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </Paragraph>
      )}
      <div
        {...inputParent}
        className={cn(
          "flex items-center border border-gray-400 rounded-sm focus-within:border-gray-500",
          inputParent?.className,
          {
            "pr-3": !!startAdornment,
            "pl-3": !!endAdornment,
            "border-red-600": errorMessage,
          }
        )}
      >
        {startAdornment}
        <input
          className={cn(
            "w-full px-3 focus-visible:border-black placeholder-gray-400 text-gray-950 h-16 focus-visible:outline-0",
            GENERAL_CONSTANTS.TYPOGRAPHY_STYLES["caption3"],
            {
              "font-[600] font-[outfitDigits] placeholder:font-[dana] placeholder:font-[200] -tracking-tighter":
                inputProps.type === "number",
            },
            className
          )}
          onWheel={(e) => e.currentTarget.blur()}
          {...inputProps}
        />
        {endAdornment}
      </div>
      {errorMessage && (
        <Paragraph variant="caption2" className="text-red-600">
          {errorMessage}
        </Paragraph>
      )}
      {hint && (
        <Paragraph
          className="flex items-center gap-1 text-gray-500 font-[300]"
          variant="caption3"
        >
          <Icons.InfoCircle size={20} className="fill-gray-500" /> {hint}
        </Paragraph>
      )}
    </div>
  );
};
