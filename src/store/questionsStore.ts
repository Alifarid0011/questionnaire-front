import type { StoreTypes } from "@/types";
import { create } from "zustand";

export const useQuestionStore = create<StoreTypes.IQuestionStore>((set) => ({
  form: null,
  answers: [],

  setForm: (form) => set({ form, answers: [] }),
  clearForm: () => set({ form: null, answers: [] }),

  setAnswer: (questionId, label, answer) =>
    set((state) => {
      const existing = state.answers.find((a) => a.id === questionId);
      if (existing) {
        return {
          answers: state.answers.map((a) =>
            a.id === questionId ? { ...a, answer } : a
          ),
        };
      }
      return {
        answers: [...state.answers, { id: questionId, label, answer }],
      };
    }),

  clearAnswers: () => set({ answers: [] }),
}));
