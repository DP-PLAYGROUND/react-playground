import {FunctionComponent, PropsWithChildren} from 'react';
import styles from './TodoView.module.scss';
import {TodoDraft} from '../../TodoDraft';

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
            <div className={styles.todo}>
                <div className={styles.editable}>
                    <input type="checkbox"
                           checked={completed}
                           onChange={event => onChange?.({ completed: event.target.checked})}/>
                    <input type="text"
                           value={title}
                           onChange={event => onChange?.({title: event.target.value})}/>
                </div>
                <div>{children}</div>
            </div>
        )
    }
