import {FunctionComponent} from 'react';
import {TodoView} from './TodoView/TodoView';
import styles from './TodosList.module.scss'
import {todosActions} from '../todosSlice';
import {useAppDispatch} from '../../app/hooks';
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
                <TodoView key={id}
                          title={title}
                          completed={completed}
                          onChange={changes => appDispatcher(todosActions.updated({id, changes}))}>
                    <div className={styles.todoContent}>
                        <div><DateFormat value={createdAt} format={'ff'}/></div>
                        <button onClick={() => appDispatcher(todosActions.removed(id))}>Remove</button>
                    </div>
                </TodoView>
            ))}
        </section>
    )
}
