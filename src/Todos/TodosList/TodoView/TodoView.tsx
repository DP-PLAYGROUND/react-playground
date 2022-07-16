import {FunctionComponent, PropsWithChildren} from 'react';
import styles from './TodoView.module.scss';
import {TodoDraft} from '../../todosSlice';

interface TodoViewProps extends TodoDraft {
    readonly onChange?: (todo: Partial<TodoDraft>) => void;
}
export const TodoView: FunctionComponent<PropsWithChildren<TodoViewProps>> =
    ({
         children,
         title,
         completed,
         onChange}
    ) => {
        return (
            <section className={styles.todo}>
                <input type="checkbox"
                       checked={completed}
                       onChange={event => onChange?.({ completed: event.target.checked})}/>
                <input type="text"
                       value={title}
                       onChange={event => onChange?.({title: event.target.value})}/>
                <div>{children}</div>
            </section>
        )
    }
