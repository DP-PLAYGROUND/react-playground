import {FunctionComponent, useEffect} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {loadTodos, selectAllTodos} from './todosSlice';

const Todos: FunctionComponent = () => {
    const todos = useAppSelector(selectAllTodos);

    const appDispatch = useAppDispatch();

    useEffect(() => {
        appDispatch(loadTodos())
    }, [appDispatch]);

    return (
        <section className={styles.todos}>
            <TodosList todos={todos}/>
        </section>
    )
}

export default Todos
