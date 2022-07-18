import {FunctionComponent, useMemo} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectFilteredTodos, todosActions} from './todosSlice';
import {TodosFilter} from './TodosFilter/TodosFilter';
import {todosFilterStrategyFactory} from './todosFilterStrategyFactory';
import {selectTodosFilterParams} from './TodosFilter/todosFilterSlice';

const Todos: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const todosFilterParams = useAppSelector(selectTodosFilterParams);

    const todosFilterStrategy = useMemo(() => todosFilterStrategyFactory(todosFilterParams), [todosFilterParams]);

    const todos = useAppSelector(state => selectFilteredTodos(state, todosFilterStrategy));

    const onCreate = () => appDispatcher(todosActions.create({title: '', completed: false}));

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
