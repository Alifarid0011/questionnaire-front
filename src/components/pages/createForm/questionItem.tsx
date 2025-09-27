import { Button, Icons, Input } from "@/components/ui";
import type { GeneralTypes } from "@/types";

interface QuestionProps {
  question: GeneralTypes.IQuestion;
  onUpdate: (updated: Partial<GeneralTypes.IQuestion>) => void;
  onAddOption: () => void;
  onRemoveOption: (index: number) => void;
  onRemoveQuestion: () => void;
}

export const QuestionItem: React.FC<QuestionProps> = ({
  question,
  onUpdate,
  onAddOption,
  onRemoveOption,
  onRemoveQuestion,
}) => {
  return (
    <div className="rounded-lg bg-natural-100 p-3">
      <div className="flex justify-between items-center mb-2 gap-2">
        <Input
          containerProps={{
            className: "flex-1 bg-natural-300 rounded-t-sm",
          }}
          inputParent={{
            className: "border-0 border-b rounded-none",
          }}
          value={question.label}
          onChange={(e) => onUpdate({ label: e.target.value })}
        />
        <Icons.Delete
          onClick={onRemoveQuestion}
          className="cursor-pointer mx-2 hover:fill-red-500 transition"
        />
      </div>

      {question.type === "short" && (
        <Input
          className="placeholder:text-lg"
          inputParent={{
            className: "border-0 border-b rounded-none",
          }}
          containerProps={{
            className: "rounded-t-sm",
          }}
          placeholder="short answer"
          disabled
        />
      )}

      {(question.type === "radio" || question.type === "checkbox") && (
        <div className="space-y-2 mt-5">
          {question.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type={question.type} name={question.id} disabled />
              <Input
                className="placeholder:text-sm text-lg"
                inputParent={{
                  className: "border-0 border-b rounded-none",
                }}
                value={opt}
                onChange={(e) => {
                  const newOptions = [...question.options];
                  newOptions[i] = e.target.value;
                  onUpdate({ options: newOptions });
                }}
              />
              {question.options.length > 1 && (
                <Icons.CloseRemove
                  className="fill-red-500 cursor-pointer"
                  onClick={() => onRemoveOption(i)}
                />
              )}
            </div>
          ))}

          <Button onClick={onAddOption} className="bg-primary-400 mt-3 text-sm">
            add option
          </Button>
        </div>
      )}
    </div>
  );
};
