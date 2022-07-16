import {FunctionComponent} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectAllTodos, todosActions} from './todosSlice';
import {TodosFilter} from './TodosFilter/TodosFilter';

const Todos: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const todos = useAppSelector(selectAllTodos);

    const onCreate = () => appDispatcher(todosActions.create({title: '', completed: false}))

    return (
        <>
            <header className={styles.header}>
                <TodosFilter/>
                <button onClick={onCreate}>Create</button>
            </header>

            <section className={styles.todos}>
                <TodosList todos={todos}/>
            </section>
        </>
    )
}

export default Todos
