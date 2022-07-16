import {FunctionComponent} from 'react';
import {TodoView} from './TodoView/TodoView';
import styles from './TodosList.module.scss'
import {Todo, todosActions} from '../todosSlice';
import {useAppDispatch} from '../../app/hooks';

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
                          onChange={changes => appDispatcher(todosActions.update({id, changes}))}>
                    <button onClick={() => appDispatcher(todosActions.remove(id))}>Remove</button>
                </TodoView>
            ))}
        </section>
    )
}
