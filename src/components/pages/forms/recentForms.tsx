import { Swiper, SwiperSlide } from "swiper/react";

import { Paragraph } from "@/components/ui";

interface IForms {
  id: number;
  title: string;
  description: string;
}

const FORMS: IForms[] = [
  { id: 1, title: "Form 1", description: "Description for form 1" },
  { id: 2, title: "Form 2", description: "Description for form 2" },
  { id: 3, title: "Form 3", description: "Description for form 3" },
  { id: 4, title: "Form 4", description: "Description for form 4" },
  { id: 5, title: "Form 5", description: "Description for form 5" },
  { id: 6, title: "Form 6", description: "Description for form 6" },
  { id: 7, title: "Form 7", description: "Description for form 7" },
  { id: 8, title: "Form 8", description: "Description for form 8" },
  { id: 9, title: "Form 9", description: "Description for form 9" },
  { id: 10, title: "Form 10", description: "Description for form 10" },
  { id: 11, title: "Form 11", description: "Description for form 11" },
  { id: 12, title: "Form 12", description: "Description for form 12" },
  { id: 13, title: "Form 13", description: "Description for form 13" },
  { id: 14, title: "Form 14", description: "Description for form 14" },
  { id: 15, title: "Form 15", description: "Description for form 15" },
  { id: 16, title: "Form 16", description: "Description for form 16" },
  { id: 17, title: "Form 17", description: "Description for form 17" },
  { id: 18, title: "Form 18", description: "Description for form 18" },
  { id: 19, title: "Form 19", description: "Description for form 19" },
  { id: 20, title: "Form 20", description: "Description for form 20" },
  { id: 21, title: "Form 21", description: "Description for form 21" },
  { id: 22, title: "Form 22", description: "Description for form 22" },
  { id: 23, title: "Form 23", description: "Description for form 23" },
  { id: 24, title: "Form 24", description: "Description for form 24" },
  { id: 25, title: "Form 25", description: "Description for form 25" },
  { id: 26, title: "Form 26", description: "Description for form 26" },
  { id: 27, title: "Form 27", description: "Description for form 27" },
  { id: 28, title: "Form 28", description: "Description for form 28" },
  { id: 29, title: "Form 29", description: "Description for form 29" },
  { id: 30, title: "Form 30", description: "Description for form 30" },
];

export const RecentForms = () => {
  return (
    <div>
      <Paragraph variant="title2" className="mb-3">
        recent forms
      </Paragraph>

      <Swiper spaceBetween={30} slidesPerView={5}>
        {FORMS.map((form) => {
          return (
            <SwiperSlide
              key={form.id}
              className="bg-natural-300 rounded-lg p-3 !flex flex-col gap-3 items-center justify-center border border-natural-300 hover:border-natural-700 transition cursor-pointer !h-32"
            >
              <Paragraph variant="title2">{form.title}</Paragraph>
              <Paragraph variant="body3" className="text-gray-600">
                {form.description}
              </Paragraph>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
