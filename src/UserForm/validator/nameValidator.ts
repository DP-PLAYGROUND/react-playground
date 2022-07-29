import { lengthValidator } from "./lengthValidator";
import { requiredValidator } from "./requiredValidator";

export const nameValidator = (value: string) =>
    {
        return requiredValidator(value) || lengthValidator(3)(value);
    };