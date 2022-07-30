import { chainedValidator } from "../../app/validators/chainedValidator";
import { minLengthValidator } from "../../app/validators/minLengthValidator";

export const passwordValidator = chainedValidator<string>([
  minLengthValidator(8),
  (value) => (/[A-Z]/.test(value) ? "" : "At least 1 uppecase letter required"),
  (value) => (/\d/.test(value) ? "" : "At least 1 number required"),
]);
