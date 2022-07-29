import { Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import { User } from "./User";
import styles from './UserForm.module.scss';

const initialValues: User = {
  name: "",
  email: ""
};

const UserForm: FunctionComponent = () => {
  const handleSubmit = (data: typeof initialValues) => {
    console.log(data);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field name="name" placeholder="Name"></Field>
        <Field name="email" type="email" placeholder="Email"></Field>
        <Field name="age" type="number" placeholder="Age"></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
