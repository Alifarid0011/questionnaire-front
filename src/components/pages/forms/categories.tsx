import { Swiper, SwiperSlide } from "swiper/react";

import { Paragraph } from "@/components/ui";

interface ICategory {
  id: number;
  title: string;
  description: string;
}

const CATEGORIES: ICategory[] = [
  { id: 1, title: "Category 1", description: "Description for category 1" },
  { id: 2, title: "Category 2", description: "Description for category 2" },
  { id: 3, title: "Category 3", description: "Description for category 3" },
  { id: 4, title: "Category 4", description: "Description for category 4" },
  { id: 5, title: "Category 5", description: "Description for category 5" },
  { id: 6, title: "Category 6", description: "Description for category 6" },
  { id: 7, title: "Category 7", description: "Description for category 7" },
  { id: 8, title: "Category 8", description: "Description for category 8" },
  { id: 9, title: "Category 9", description: "Description for category 9" },
  { id: 10, title: "Category 10", description: "Description for category 10" },
  { id: 11, title: "Category 11", description: "Description for category 11" },
  { id: 12, title: "Category 12", description: "Description for category 12" },
  { id: 13, title: "Category 13", description: "Description for category 13" },
  { id: 14, title: "Category 14", description: "Description for category 14" },
  { id: 15, title: "Category 15", description: "Description for category 15" },
  { id: 16, title: "Category 16", description: "Description for category 16" },
  { id: 17, title: "Category 17", description: "Description for category 17" },
  { id: 18, title: "Category 18", description: "Description for category 18" },
  { id: 19, title: "Category 19", description: "Description for category 19" },
  { id: 20, title: "Category 20", description: "Description for category 20" },
  { id: 21, title: "Category 21", description: "Description for category 21" },
  { id: 22, title: "Category 22", description: "Description for category 22" },
  { id: 23, title: "Category 23", description: "Description for category 23" },
  { id: 24, title: "Category 24", description: "Description for category 24" },
  { id: 25, title: "Category 25", description: "Description for category 25" },
  { id: 26, title: "Category 26", description: "Description for category 26" },
  { id: 27, title: "Category 27", description: "Description for category 27" },
  { id: 28, title: "Category 28", description: "Description for category 28" },
  { id: 29, title: "Category 29", description: "Description for category 29" },
  { id: 30, title: "Category 30", description: "Description for category 30" },
];

export const Categories = () => {
  return (
    <div>
      <Paragraph variant="title2" className="mb-3">
        recent categories
      </Paragraph>

      <Swiper spaceBetween={30} slidesPerView={5}>
        {CATEGORIES.map((form) => {
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
