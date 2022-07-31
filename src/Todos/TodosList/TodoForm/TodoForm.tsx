import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./TodoForm.module.scss";
import { TodoDraft } from "../../todo/TodoDraft";
import { Card, CardActions, CardContent, Checkbox, TextField } from "@mui/material";

interface TodoFormProps extends TodoDraft {
  readonly onChange?: (todo: Partial<TodoDraft>) => void;
}
export const TodoForm: FunctionComponent<PropsWithChildren<TodoFormProps>> = ({
  children,
  title,
  completed,
  onChange,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <form
          className={styles.editable}
          onSubmit={(event) => event.preventDefault()}
        >
          <Checkbox
            checked={completed}
            onChange={(event) =>
              onChange?.({ completed: event.target.checked })
            }
          />
          <TextField
            type="text"
            label="Title"
            value={title}
            onChange={(event) => onChange?.({ title: event.target.value })}
          />
        </form>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
