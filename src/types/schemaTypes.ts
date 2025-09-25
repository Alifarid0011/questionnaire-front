import z from "zod";

// auth
export const SLoginFormValidation = z.object({
  national_code: z.string("").nonempty("username is required"),
  password: z.string("").nonempty("password is required"),
  // captcha: z
  //   .string("")
  //   .nonempty("captcha is required")
  //   .length(5, "کد کپچا ۵ عدد است"),
});
