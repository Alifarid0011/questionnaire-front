import { useState } from "react";

import { FormsList } from "@/components/pages/createForm";
import { Button, Input } from "@/components/ui";
import type { GeneralTypes } from "@/types";
import { useQuestionStore } from "@/store/questionsStore";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/constants";

export const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: "form title",
    desc: "form ",
  });
  const { setForm } = useQuestionStore();
  const [questions, setQuestions] = useState<GeneralTypes.IQuestion[]>([]);

  const navigate = useNavigate();

  const handlePublication = () => {
    const { desc, title } = formData;

    setForm({
      desc,
      title,
      questions,
    });

    navigate(ROUTE_PATH.app.formFiller);
  };

  const handleSetFormData = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      <div className="w-[700px] mx-auto">
        <div className="border-t-8 border-primary-20 rounded-t-lg">
          <Input
            onChange={(e) =>
              handleSetFormData(e.currentTarget.name, e.currentTarget.value)
            }
            value={formData["title"]}
            className="placeholder:text-gray-500 border-0"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            name="title"
            placeholder="form title"
          />
          <Input
            className="placeholder:text-lg text-lg border-0 text-gray-600"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            value={formData["desc"]}
            onChange={(e) =>
              handleSetFormData(e.currentTarget.name, e.currentTarget.value)
            }
            name="desc"
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
