import type { GeneralTypes } from ".";

export type QuestionType = "short" | "radio" | "checkbox";

export interface IQuestionStore {
  form: GeneralTypes.IQuestionForm | null;
  answers: GeneralTypes.TUserAnswer[];
  setForm: (form: GeneralTypes.IQuestionForm) => void;
  clearForm: () => void;

  setAnswer: (
    questionId: string,
    label: string,
    answer: string | string[]
  ) => void;
  clearAnswers: () => void;
}
