import { FieldValidator } from "formik";

export const chainedValidator = <T>(validators: readonly FieldValidator[]): FieldValidator => {
    return (value: T) => {
        for (const validator of validators) {
            const result = validator(value);

            if (result) {
                return result;
            }
        }

        return '';
    }
}