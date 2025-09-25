import type { FC, ImgHTMLAttributes } from "react";

import { cn } from "@/libs";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const Image: FC<Props> = ({ ...imageProps }) => {
  return (
    <img {...imageProps} className={cn("object-cover", imageProps.className)} />
  );
};
