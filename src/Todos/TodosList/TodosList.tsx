import {FunctionComponent} from 'react';
import {Todo} from '../../api/Todos/Todo';
import {TodoView} from './TodoView/TodoView';
import styles from './TodosList.module.scss'

interface TodosListProps {
    readonly todos: readonly Todo[]
}

export const TodosList: FunctionComponent<TodosListProps> = ({todos}) => {
    return (
        <section className={styles.list}>
            {todos.map(({id, title, completed}) => (
                <TodoView key={id} title={title} completed={completed}>
                    <button>Remove</button>
                </TodoView>
            ))}
        </section>
    )
}
