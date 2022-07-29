import { lengthValidator } from "./lengthValidator";
import { requiredValidator } from "./requiredValidator";

export const passwordValidator = (value: string) => {
    const errorRequired = requiredValidator(value);
    const errorLength = lengthValidator(8)(value);
    const errorUppercase = /[A-Z]/.test(value)
      ? ""
      : "At least 1 uppecase letter required";
    const errorNumber = /\d/.test(value) ? "" : "At least 1 number required";
  
    return errorRequired || errorLength || errorUppercase || errorNumber;
  };