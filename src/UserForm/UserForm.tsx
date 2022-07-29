import { Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import styles from "./UserForm.module.scss";

const UserForm: FunctionComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name"></Field>
        <Field name="email" type="email" placeholder="Email"></Field>
        <Field name="password" type="password" placeholder="Password"></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
