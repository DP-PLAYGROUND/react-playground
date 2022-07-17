import {FunctionComponent} from 'react';
import {TodoView} from './TodoView/TodoView';
import styles from './TodosList.module.scss'
import {todosActions} from '../todosSlice';
import {useAppDispatch} from '../../app/hooks';
import {Todo} from '../Todo';

interface TodosListProps {
    readonly todos: readonly Todo[]
}

export const TodosList: FunctionComponent<TodosListProps> = ({todos}) => {
    const appDispatcher = useAppDispatch();

    return (
        <section className={styles.list}>
            {todos.map(({id, title, completed}) => (
                <TodoView key={id}
                          title={title}
                          completed={completed}
                          onChange={changes => appDispatcher(todosActions.updated({id, changes}))}>
                    <button onClick={() => appDispatcher(todosActions.removed(id))}>Remove</button>
                </TodoView>
            ))}
        </section>
    )
}
