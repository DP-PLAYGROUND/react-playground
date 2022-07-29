import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import styles from "./UserForm.module.scss";
import { emailValidator } from "./validator/emailValidator";
import { nameValidator } from "./validator/nameValidator";
import { passwordValidator } from "./validator/passwordValidator";

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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
