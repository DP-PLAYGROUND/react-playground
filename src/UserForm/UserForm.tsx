import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import { emailValidator } from "../app/validators/emailValidator";
import { Signature } from "./Signature/Signature";
import styles from "./UserForm.module.scss";
import { nameValidator } from "./validators/nameValidator";
import { passwordValidator } from "./validators/passwordValidator";
import { signatureValidator } from "./validators/signatureValidator";

const UserForm: FunctionComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" validate={nameValidator}></Field>
        <ErrorMessage name="name" />

        <Field
          name="email"
          type="email"
          placeholder="Email"
          validate={emailValidator}
        ></Field>
        <ErrorMessage name="email" />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          validate={passwordValidator}
        ></Field>
        <ErrorMessage name="password" />
        <Field
          name="signature"
          component={Signature}
          validate={signatureValidator}
        ></Field>
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
