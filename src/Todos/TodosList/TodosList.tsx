import {FunctionComponent} from 'react';
import {TodoForm} from './TodoForm/TodoForm';
import styles from './TodosList.module.scss'
import {todosActions} from '../todosSlice';
import {useAppDispatch} from '../../store/hooks';
import {Todo} from '../Todo';
import {DateFormat} from '../../components/DateFormat/DateFormat';

interface TodosListProps {
    readonly todos: readonly Todo[]
}

export const TodosList: FunctionComponent<TodosListProps> = ({todos}) => {
    const appDispatcher = useAppDispatch();

    return (
        <section className={styles.list}>
            {todos.map(({id, title, completed, createdAt}) => (
                <TodoForm key={id}
                          title={title}
                          completed={completed}
                          onChange={changes => appDispatcher(todosActions.updated({id, changes}))}>
                    <div className={styles.todoFooter}>
                        <div>
                            <DateFormat value={createdAt} format={'ff'}/>
                        </div>
                        <button onClick={() => appDispatcher(todosActions.removed(id))}>Remove</button>
                    </div>
                </TodoForm>
            ))}
        </section>
    )
}
