import { FieldValidator } from "formik";

export const requiredValidator: FieldValidator = (value: unknown) => (value ? "" : "Required");