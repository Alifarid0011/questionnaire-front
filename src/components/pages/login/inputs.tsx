import type { FC } from "react";
import { Controller, type Control } from "react-hook-form";

import { GENERAL_CONSTANTS } from "@/constants";
import type { GeneralTypes } from "@/types";
import { Input } from "@/components/ui";

interface Props {
  control: Control<GeneralTypes.TLoginFormInitialValues>;
}

export const Inputs: FC<Props> = ({ control }) => {
  return (
    <>
      {GENERAL_CONSTANTS.LOGIN_FORM_INPUTS.map((item, i) => {
        return (
          <Controller
            name={item.name}
            control={control}
            key={i}
            render={({ field, fieldState }) => (
              <Input
                className="text-xl placeholder:text-xl"
                key={i}
                type={item.type}
                errorMessage={fieldState.error?.message}
                placeholder={item.placeholder}
                label={item.label}
                isRequired={item.isRequired}
                {...field}
              />
            )}
          />
        );
      })}
    </>
  );
};
