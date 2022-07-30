import { FieldValidator } from "formik";

export const emailValidator: FieldValidator = (value: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? ""
    : "Invalid email";
