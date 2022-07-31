import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import { emailValidator } from "../app/validators/emailValidator";
import { Signature } from "./Signature/Signature";
import styles from "./UserForm.module.scss";
import { nameValidator } from "./validators/nameValidator";
import { passwordValidator } from "./validators/passwordValidator";
import { signatureValidator } from "./validators/signatureValidator";

const initialValues = {
  name: "",
  email: "",
  password: "",
  signature: new ImageData(1, 1)
};

const UserForm: FunctionComponent = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" validate={nameValidator}></Field>
        <ErrorMessage name="name">
          {(message) => <span className={styles.error}>{message}</span>}
        </ErrorMessage>

        <Field
          name="email"
          type="email"
          placeholder="Email"
          validate={emailValidator}
        ></Field>
        <ErrorMessage name="email">
          {(message) => <span className={styles.error}>{message}</span>}
        </ErrorMessage>

        <Field
          name="password"
          type="password"
          placeholder="Password"
          validate={passwordValidator}
        ></Field>
        <ErrorMessage name="password">
          {(message) => <span className={styles.error}>{message}</span>}
        </ErrorMessage>

        <Field
          name="signature"
          component={Signature}
          validate={signatureValidator}
        ></Field>
        <ErrorMessage name="signature">
          {(message) => <span className={styles.error}>{message}</span>}
        </ErrorMessage>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
