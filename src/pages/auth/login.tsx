import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Header } from "@/components/pages/login";
import { Inputs } from "@/components/pages/login/inputs";
import { GENERAL_CONSTANTS, ROUTE_PATH } from "@/constants";
import { SchemaTypes } from "@/types";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(SchemaTypes.SLoginFormValidation),
    defaultValues: GENERAL_CONSTANTS.LOGIN_FORM_INITIAL_VALUE,
  });

  const handleFormSubmit = () => {
    navigate(ROUTE_PATH.app.forms);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="m-auto w-[600px] px-8 pb-5 pt-3 max-md:w-[90%] max-md:p-7 bg-white rounded-sm"
    >
      <Header />
      <div className="flex flex-col gap-5">
        <Inputs control={control} />
      </div>

      <Button
        loadingComponentProps={{
          size: 8,
        }}
        type="submit"
        className="w-full mt-7 h-[60px]"
      >
        submit
      </Button>
    </form>
  );
};
