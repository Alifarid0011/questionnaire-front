import { Button, Input, Paragraph } from "@/components/ui";
import { ROUTE_PATH } from "@/constants";
import { useQuestionStore } from "@/store/questionsStore";
import { useNavigate } from "react-router-dom";

export const FormFiller = () => {
  const form = useQuestionStore((state) => state.form);
  const answers = useQuestionStore((state) => state.answers);
  const setAnswer = useQuestionStore((state) => state.setAnswer);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ answers });
  };

  if (!form?.questions)
    return (
      <div className="h-dvh flex flex-col w-max mx-auto gap-5 mt-35">
        <Paragraph variant="title2">no form found</Paragraph>
        <Button onClick={() => navigate(ROUTE_PATH.app.createForm)}>
          create form
        </Button>
      </div>
    );

  const getAnswer = (id: string) =>
    answers.find((a) => a.id === id)?.answer || "";

  return (
    <div className="w-[700px] mx-auto p-4 rounded bg-natural-300">
      <div className="border-b border-gray-400 mb-10 pb-5">
        <Paragraph className="text-[32px] font-[300]">{form.title}</Paragraph>
        <Paragraph className="text-gray-600 text-[26px] font-[300]">
          {form.desc}
        </Paragraph>
      </div>

      <div className="flex flex-col gap-5">
        {form?.questions.map((q) => (
          <div key={q.id} className="pb-4 flex flex-col gap-3">
            <Paragraph variant="title2">{q.label}</Paragraph>

            {q.type === "short" && (
              <Input
                inputParent={{
                  className: "border-0 border-b border-gray-400 rounded-none",
                }}
                className="w-full p-2 h-12 text-gray-600"
                placeholder="your answer..."
                value={getAnswer(q.id) as string}
                onChange={(e) => setAnswer(q.id, q.label, e.target.value)}
              />
            )}

            {q.type === "radio" &&
              q.options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={getAnswer(q.id) === opt}
                    onChange={() => setAnswer(q.id, q.label, opt)}
                  />
                  {opt}
                </label>
              ))}

            {q.type === "checkbox" &&
              q.options.map((opt) => {
                const current = (getAnswer(q.id) as string[]) || [];
                const checked = current.includes(opt);

                return (
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        let updated: string[];
                        if (e.target.checked) {
                          updated = [...current, opt];
                        } else {
                          updated = current.filter((v) => v !== opt);
                        }
                        setAnswer(q.id, q.label, updated);
                      }}
                    />
                    {opt}
                  </label>
                );
              })}
          </div>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        variant="title3"
        className="w-full  bg-primary-400 text-white px-4 rounded mt-5 py-7"
      >
        send reply
      </Button>
    </div>
  );
};
