import { FieldValidator } from "formik";

export const emailValidator: FieldValidator = (value: string) =>
  /^[a-z\d._-]+@[a-z\d._-]+$/i.test(value) ? "" : "Invalid email";
