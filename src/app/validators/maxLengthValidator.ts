import { FieldValidator } from "formik";

export const maxLengthValidator = (length: number): FieldValidator => (value: string) =>
  value.length > length ? `Must be a maximum ${length} symbols` : "";