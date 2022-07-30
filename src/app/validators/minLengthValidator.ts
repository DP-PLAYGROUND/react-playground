import { FieldValidator } from "formik";

export const minLengthValidator = (length: number): FieldValidator => (value: string) =>
  value.length < length ? `Must be at least ${length} symbols` : "";