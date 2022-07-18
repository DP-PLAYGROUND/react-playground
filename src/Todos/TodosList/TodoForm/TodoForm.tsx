import {FunctionComponent, PropsWithChildren} from 'react';
import styles from './TodoForm.module.scss';
import {TodoDraft} from '../../todo/TodoDraft';

interface TodoFormProps extends TodoDraft {
    readonly onChange?: (todo: Partial<TodoDraft>) => void;
}
export const TodoForm: FunctionComponent<PropsWithChildren<TodoFormProps>> =
    ({
         children,
         title,
         completed,
         onChange}
    ) => {
        return (
            <div className={styles.todo}>
                <form className={styles.editable} onSubmit={event => event.preventDefault()}>
                    <input type="checkbox"
                           checked={completed}
                           onChange={event => onChange?.({ completed: event.target.checked})}/>
                    <input type="text"
                           value={title}
                           onChange={event => onChange?.({title: event.target.value})}/>
                </form>
                <footer>{children}</footer>
            </div>
        )
    }
