import { chainedValidator } from "../../app/validators/chainedValidator";
import { minLengthValidator } from "../../app/validators/minLengthValidator";

export const nameValidator = chainedValidator([
    minLengthValidator(3)
]);