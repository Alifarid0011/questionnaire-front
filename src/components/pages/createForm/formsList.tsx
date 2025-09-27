import type { Dispatch, FC, SetStateAction } from "react";

import { QuestionItem } from "./questionItem";
import { Icons, Paragraph } from "@/components/ui";
import type { GeneralTypes } from "@/types";

interface Props {
  questions: GeneralTypes.IQuestion[];
  setQuestions: Dispatch<SetStateAction<GeneralTypes.IQuestion[]>>;
}

interface IQuestionType {
  type: "short" | "radio" | "checkbox";
  label: string;
}

const QUESTION_TYPES: IQuestionType[] = [
  {
    label: "short answer",
    type: "short",
  },
  {
    label: "Check box",
    type: "checkbox",
  },
  {
    label: "multiple choice",
    type: "radio",
  },
];

export const FormsList: FC<Props> = ({ questions, setQuestions }) => {
  const addQuestion = (type: GeneralTypes.TQuestionTypes) => {
    const newQuestion: GeneralTypes.IQuestion = {
      id: crypto.randomUUID(),
      type,
      label: `Question ${questions.length + 1}`,
      options: type === "short" ? [] : ["option 1", "option 2"],
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const updateQuestion = (
    id: string,
    updated: Partial<GeneralTypes.IQuestion>
  ) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updated } : q))
    );
  };

  const addOption = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              options: [...q.options, `option ${q.options.length + 1}`],
            }
          : q
      )
    );
  };

  const removeOption = (id: string, index: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              options: q.options.filter((_, i) => i !== index),
            }
          : q
      )
    );
  };

  const removeQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-5 mt-5">
        {QUESTION_TYPES.map((item, i) => {
          return (
            <Paragraph
              key={i}
              className="flex items-center gap-1 cursor-pointer transition hover:text-primary-400"
              onClick={() => addQuestion(item.type)}
            >
              <Icons.Plus /> {item.label}
            </Paragraph>
          );
        })}
      </div>

      {questions.map((q) => (
        <QuestionItem
          key={q.id}
          question={q}
          onUpdate={(updated) => updateQuestion(q.id, updated)}
          onAddOption={() => addOption(q.id)}
          onRemoveOption={(i) => removeOption(q.id, i)}
          onRemoveQuestion={() => removeQuestion(q.id)}
        />
      ))}
    </div>
  );
};
