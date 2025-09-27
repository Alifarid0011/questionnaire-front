import { useState } from "react";

import { FormsList } from "@/components/pages/createForm";
import { Button, Input } from "@/components/ui";
import type { GeneralTypes } from "@/types";

export const CreateForm = () => {
  const [questions, setQuestions] = useState<GeneralTypes.IQuestion[]>([]);

  const handlePublication = () => {
    console.log({ questions });
  };

  return (
    <div className="container mx-auto">
      <div className="w-[700px] mx-auto">
        <div className="border-t-8 border-primary-20 rounded-t-lg">
          <Input
            className="placeholder:text-gray-500 border-0"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            placeholder="form title"
          />
          <Input
            className="placeholder:text-sm text-xl border-0"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            placeholder="form description"
          />
        </div>
        <FormsList questions={questions} setQuestions={setQuestions} />
        {questions.length !== 0 && (
          <Button
            onClick={handlePublication}
            className="w-full mt-8 bg-secondary-500"
          >
            publication
          </Button>
        )}
      </div>
    </div>
  );
};
