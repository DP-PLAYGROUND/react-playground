import { FieldValidator } from "formik";

const minSignatureDimension = 200;

export const signatureValidator: FieldValidator = (value: ImageData) => {
    return value.data.filter(item => item > 0).length > minSignatureDimension ? '' : 'Required';
} 