import {FunctionComponent, useEffect} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {loadTodos, selectAllTodos, selectTotalTodos} from './todosSlice';

const Todos: FunctionComponent = () => {
    const todos = useAppSelector(selectAllTodos);

    const todosTotal = useAppSelector(selectTotalTodos);

    const appDispatch = useAppDispatch();

    useEffect(() => {
        appDispatch(loadTodos())
    }, [appDispatch]);

    return (
        <section className={styles.todos}>
            <p>Total: {todosTotal}</p>

            <TodosList todos={todos}/>
        </section>
    )
}

export default Todos
