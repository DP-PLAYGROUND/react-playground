import { requiredValidator } from "./requiredValidator";

export const emailValidator = (value: string) =>
  requiredValidator(value) ||
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? ""
    : "Invalid email";
